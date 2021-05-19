import pytest
import app
from models import *



@pytest.fixture
def api():
    api = app.app.test_client()
    return api

@pytest.fixture(scope="class")
def teardown():
    print ('INITIALIZATION')
    app.db.create_all()    
    users = [{'n':'chris','e':'test@test.com', 'p':'1234'},{'n':'brian', 'e':'brian@test.com','p':'1234'}]
    for user in users:
        create_user(user['n'], user['e'], user['p'])
    yield
    print ('TEAR DOWN')
    app.db.session.remove()
    app.db.drop_all()   
