from flask import request, jsonify

from models import Holidays, create_holiday, get_holiday, get_holiday_users, add_holiday_user, get_holiday_owner
from app import app

# maps data routes
@app.route('/holidays', methods=['POST'])
def create_holiday_route():
    data = request.get_json()
    holiday = create_holiday(data['title'], data['creator'])
    return jsonify({"msg": "success", "id": holiday.id})

# maps data routes
@app.route('/holidays/<id>', methods=['GET'])
def get_holiday_route(id):
    data = get_holiday(id)
    return jsonify({"holiday": data["holidays"], "markers": data["markers"]})

@app.route('/holidays/<id>/users', methods=['GET', 'POST'])
def add_holiday_user_route(id):
    if request.method == 'GET':    
        users = get_holiday_users(id)
        creator = get_holiday_owner(id)
        return jsonify({"users": users, "creator": creator})
    else:  
        data = request.get_json()
        res = add_holiday_user(data['user_id'], id)
        if res == False:
            return jsonify({"msg": "error"})
        else: 
            return jsonify({"data": "success"})    


