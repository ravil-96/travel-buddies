from flask import flash
from app import db
from dataclasses import dataclass

@dataclass
class Markers(db.Model):
    id: int
    title: str
    desc: str
    position_lat: float
    position_long: float
    holiday_id: int

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    desc = db.Column(db.String(500), nullable=False)
    position_lat = db.Column(db.Float, nullable=False)
    position_long = db.Column(db.Float, nullable=False)
    holiday_id = db.Column(db.Integer, db.ForeignKey('holidays.id'),
        nullable=False)

def create_marker(new_title, new_desc, new_position_lat, new_position_long, new_holiday_id):
    marker = Markers(title=new_title, desc=new_desc, position_lat=new_position_lat, position_long=new_position_long, holiday_id=new_holiday_id)
    db.session.add(marker)
    db.session.commit()
    return marker

def delete_marker(id):
    marker = Markers.query.get_or_404(id)
    db.session.delete(marker)
    db.session.commit()
    flash('You have successfully deleted the marker')


