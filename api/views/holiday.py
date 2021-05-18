from flask import request, jsonify

from models import Holidays, create_holiday, get_holiday, get_holiday_users, add_holiday_user
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
        holiday = get_holiday_users(id)
        return jsonify({"msg": holiday})
    else:  
        data = request.get_json()
        add_holiday_user(id, data['user_id'])
        return jsonify({"data": "success"})    


