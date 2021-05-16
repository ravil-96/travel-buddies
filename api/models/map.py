from app import db

class Markers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    desc = db.Column(db.String(500), nullable=False)
    holiday_id = db.Column(db.Integer, db.ForeignKey('holidays.id'),
        nullable=False)