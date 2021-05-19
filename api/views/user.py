from flask import request, jsonify

from models import get_holidays_by_user
from app import app

# maps data routes
@app.route('/users/<id>/holidays', methods=['GET'])
def user_holidays(id):
    data = get_holidays_by_user(id)
    return jsonify({"holidays": data["holidays"], "markers": data["markers"]})



