from flask import request, jsonify

from models import Markers, create_marker, delete_marker
from app import app

# maps data routes
@app.route('/maps/marker', methods=['POST'])
def create_marker_route():
    data = request.get_json()
    marker = create_marker(data['title'],data['desc'],data['position_lat'], data['position_long'], data['holiday_id'])
    return jsonify({**data, "id": marker.id})

# @app.route('/maps/marker/<int:id>', methods=['GET', 'POST'])
# def delete_marker_route(marker_id):
#     data = request.get_json()
#     marker = delete_marker(data[marker_id])
#     return jsonify({"id": marker.id})
    

