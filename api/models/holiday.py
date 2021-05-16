from app import db

class Holidays(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=False, nullable=False)
    markers = db.relationship('Markers', backref='holiday_id', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.title