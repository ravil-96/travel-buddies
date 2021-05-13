from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://user:password@db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

class Holidays(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    desc = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return '<Holiday %r>' % self.name

db.create_all()
admin = Users(username='admin', email='admin@example.com')

hol1 = Holidays(name='chris\'s holiday', desc='wow, so fun!')

db.session.add(admin)
db.session.add(hol1)
db.session.commit()

@app.route('/')
def home():
    return jsonify({'message': 'hello'}), 200
