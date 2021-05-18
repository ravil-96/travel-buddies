from app import db
from dataclasses import dataclass
from .map import Markers
from .auth import *
from sqlalchemy.orm import relationship, backref

@dataclass
class Holidays(db.Model):
    id: int
    title: str
    creator: int
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=False)
    creator = db.Column(db.Integer, db.ForeignKey('users.id'),
        nullable=False)
    members = db.relationship("Users",
            secondary=holiday_members,
            backref=db.backref("users", lazy="dynamic"),
            )

def create_holiday(new_title, new_creator):
    holiday = Holidays(title=new_title, creator=new_creator)
    db.session.add(holiday)
    db.session.commit()
    return holiday

def get_holidays_by_user(id):
    markers = []
    userHolidays = Holidays.query.filter_by(creator=id).all()  
    holidays = Holidays.query.all()
    for holiday in holidays:
        for member in holiday.members:
             if member.id == int(id):
                userHolidays.append(holiday)
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

def get_holiday_owner(id):
        owner_id = Holidays.query.filter_by(id=id).first().creator
        owner = Users.query.filter_by(id=owner_id).first()
        return  {"user_id": owner.id, "username": owner.username}

def get_holiday_users(id):
        users = []
        holiday = Holidays.query.filter_by(id=id).first()
        for member in holiday.members:
            users.append({"username": member.username, "user_id": member.id})
        return  users

def add_holiday_user(new_member_id, holiday_id, ):
        member = Holiday_Members(new_member_id, holiday_id)
        db.session.add(member)
        db.session.commit()