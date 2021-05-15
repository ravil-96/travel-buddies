from app import db
import bcrypt
import jwt
db.metadata.clear()
key='supersecret'

class Users(db.Model):
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
        return True
    else:
        return False

def jwt_user(username):
    encoded = jwt.encode({"username": username}, 'mynewsecret', algorithm="HS256")
    return encoded

if __name__ == "__main__":

    # Run this file directly to create the database tables.
    print("Creating database tables...")
    db.create_all()
    print("Done!")