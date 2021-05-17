from app import db
from dataclasses import dataclass
from .map import Markers

@dataclass
class Holidays(db.Model):
    id: int
    title: str
    creator: int
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=False)
    creator = db.Column(db.Integer, db.ForeignKey('users.id'),
        nullable=False)

def create_holiday(new_title, new_creator):
    holiday = Holidays(title=new_title, creator=new_creator)
    db.session.add(holiday)
    db.session.commit()
    return holiday

def get_holidays_by_user(id):
    markers = []
    userHolidays = Holidays.query.filter_by(creator=id).all()
    for h in list(userHolidays):
        markerData = Markers.query.filter_by(holiday_id=h.id).all()
        if len(markerData) > 0:
            markers =  [*markers, *markerData]
    return {"holidays":userHolidays, "markers":markers}

def get_holiday(id):
    markers = []
    userHolidays = Holidays.query.filter_by(id=id).all()
    for h in list(userHolidays):
        markers.append(Markers.query.filter_by(holiday_id=h.id).all())
    return {"holidays":userHolidays, "markers":markers}