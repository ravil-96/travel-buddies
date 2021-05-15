from flask import request, jsonify, request

from models import Users, create_user, auth_user, jwt_user
from app import app
import jwt

@app.route('/')
def index():
    return jsonify({'msg': 'hello'}), 200


@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':    
        data = request.get_json()
        create_user(data["username"], data["email"], data["password"])
        return jsonify({'msg': 'success'}), 200

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':    
        data = request.get_json()
        res = auth_user(data["username"],data["password"])
        if res:
            return jsonify({"msg": f'hello {data["username"]}', "token": jwt_user(data["username"])})
        else:
            return jsonify({'msg': f'{res}',}), 200

@app.route('/protected/<username>', methods=['GET'])
def protected(username):
    auth = request.headers["Authorization"].split()[1]
    token = jwt.decode(auth, 'mynewsecret', algorithms=["HS256"])
    return jsonify({'msg': f'{token}'}), 200
