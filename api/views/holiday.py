from flask import request, jsonify

from models import Holidays, create_holiday, get_holiday
from app import app

# maps data routes
@app.route('/holidays', methods=['POST'])
def create_holiday_route():
    data = request.get_json()
    holiday = create_holiday(data['title'], data['creator'])
    return jsonify({"msg": "success", "id": holiday.id})

# maps data routes
@app.route('/holidays/get', methods=['GET'])
def get_holiday_route():
    holiday = get_holiday()
    return jsonify({"msg": holiday})

