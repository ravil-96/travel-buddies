from flask import request, jsonify, request

from models import Users, create_user
from app import app


@app.route('/')
def index():
    return jsonify({'msg': 'hello'}), 200


@app.route('/post', methods=['POST', 'GET'])
def add():
    if request.method == 'POST':    
        data = request.get_json()
        create_user(data["username"],data["email"])
        return jsonify({'msg': 'success'}), 200