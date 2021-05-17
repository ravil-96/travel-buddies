from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit, join_room, leave_room
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

conected_sockets = []

@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    conected_sockets.append({
        "username": data['username'],
        "id": request.sid,
        "room": data['room']
    }) 
    emit('join response', data, to=room)
    emit('connected sockets', list(filter(lambda cs: cs['room'] == room, conected_sockets)), to=room)

@socketio.on('disconnect')
def test_disconnect():
    disconnecting_socket = next(item for item in conected_sockets if item["id"] == request.sid)
    username = disconnecting_socket['username']
    room = disconnecting_socket['room']
    for i in range(len(conected_sockets)):
        if conected_sockets[i]['id'] == request.sid:
            del conected_sockets[i]
            break
    emit('leave response', {"username":username, "room":room}, to=room)
    emit('connected sockets', list(filter(lambda cs: cs['room'] == room, conected_sockets)), to=room)
    leave_room(room)

@socketio.on('add marker')
def add_marker(data):
    emit('server marker', data['marker'], to=data['room'])

@socketio.on('client message')
def add_message(data):
    emit('server message', data['message'], to=data['room'])


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port="3000")