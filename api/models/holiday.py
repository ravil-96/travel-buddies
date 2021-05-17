from app import db
from dataclasses import dataclass
from .map import Markers

holiday_members = db.Table('holiday_members',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('holiday_id', db.Integer, db.ForeignKey('holidays.id'), primary_key=True)
)

@dataclass
class Holidays(db.Model):
    id: int
    title: str
    creator: int
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=False)
    creator = db.Column(db.Integer, db.ForeignKey('users.id'),
        nullable=False)
    holiday_members = db.relationship('Users', secondary=holiday_members, lazy='subquery',
    backref=db.backref('holidays', lazy=True))

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
    holiday = Holidays.query.filter_by(id=id).first()
    markerData = Markers.query.filter_by(holiday_id=holiday.id).all()
    if len(markerData) > 0:
        markers =  [*markers, *markerData]
    return {"holidays":holiday, "markers":markers}

def get_holiday_users(id):
    holiday_users = db.session.query(holiday_members).join('users', users.id== holiday_members.user_id)
    return holiday_users

def add_holiday_user(holiday_id, new_member_id):
    db.session.execute(holiday_members.insert(),params={"holiday_id": holiday_id, "user_id": new_member_id},)
    db.session.commit()