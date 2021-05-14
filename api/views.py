from flask import request, jsonify, request

from models import Users, create_user, auth_user, jwt_user
from app import app


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
            return jwt_user(data["username"])
        else:
            return jsonify({'msg': f'{res}'}), 200