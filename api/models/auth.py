from app import db
import bcrypt
import jwt
key='supersecret'
from dataclasses import dataclass

@dataclass
class Users(db.Model):
    id: int
    username: str
    email: str
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False, nullable=False)
    password = db.Column(db.String(1000), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

def create_user(new_name, new_email, new_password):
    hashPass = password=bcrypt.hashpw(new_password.encode('utf8'), bcrypt.gensalt())
    user = Users(username=new_name, email=new_email, password=hashPass.decode('utf-8'))
    db.session.add(user)
    db.session.commit()
    return user

def auth_user(new_name, new_password):
    user = Users.query.filter_by(username=new_name).first()
    if bcrypt.checkpw(new_password.encode('utf8'), user.password.encode('utf-8')):
        return user.id
    else:
        return False

def jwt_user(username):
    encoded = jwt.encode({"username": username}, 'mynewsecret', algorithm="HS256")
    return encoded

def get_all_users():
    users = Users.query.all()
    return users

def search_users(query):
    users = Users.query.filter(Users.username.ilike(f'{query}%'))
    return users
