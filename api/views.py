from flask import request, jsonify, request

from models import Users, create_user, auth_user, jwt_user
from app import app
import jwt


@app.route('/')
def index():
    return jsonify({'msg': 'hello'}), 200


@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        create_user(data["username"], data["email"], data["password"])
        res = auth_user(data["username"],data["password"])
        return jsonify({"msg": f'hello {data["username"]}', "token": jwt_user(data["username"])})
    except Exception as e: 
        return jsonify({'msg': f'{e}'}), 401

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':    
        data = request.get_json()
        res = auth_user(data["username"],data["password"])
        if res:
            return jsonify({"msg": f'hello {data["username"]}', "token": jwt_user(data["username"])})
        else:
            return jsonify({'msg': f'{res}',}), 200

@app.route('/users/<username>', methods=['GET'])
def user(username):
    try:
        auth = request.headers["Authorization"].split()[1]
        token = jwt.decode(auth, 'mynewsecret', algorithms=["HS256"])
        if token["username"] == username:
            user = Users.query.filter_by(username=username).first()
            return jsonify({'msg': f'{token}', 'user' : f'{user}'}), 200
        else:
            return jsonify({'msg': 'not authorized'}), 401 
    except Exception as e: 
            return jsonify({'msg': f'{e}'}), 401