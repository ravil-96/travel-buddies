from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://user:password@db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)


db.init_app(app)
db.metadata.clear()
migrate = Migrate(app, db)

# importing the models to make sure they are known to Flask-Migrate
from models import *
from views import auth, map, holiday
# any other registrations; blueprints, template utilities, commands



# print("Creating database tables...ok!")
# db.create_all()
# print("Done!")

