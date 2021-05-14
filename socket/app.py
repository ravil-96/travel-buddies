from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message')
def handle_message(message):
    send(message)

@socketio.on('json')
def handle_json(json):
    send(json, json=True)

@socketio.on('my event')
def handle_my_custom_event(json):
    emit('my response', json, broadcast=True)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port="3000")