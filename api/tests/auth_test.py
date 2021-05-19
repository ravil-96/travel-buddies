import json
import pytest 

@pytest.mark.usefixtures("teardown")
class TestAuth():
    def test_home(self, api):
        res = api.get('/')
        assert res.json == {'msg': 'hello'}

    def test_users(self, api):
        res = api.get('/users')
        assert len(res.json['users']) == 2

    def test_register(self, api):
        mock_data = json.dumps({'username': 'admin', 'password':'password123', 'email':'test@test.com'})
        mock_headers = {'Content-Type': 'application/json'}
        res = api.post('/register', data=mock_data, headers=mock_headers)
        assert res.json['msg'] == 'admin'
    
    def test_adds_user(self, api):
        res = api.get('/users')
        assert len(res.json['users']) == 3

    def test_login(self, api):
        mock_data = json.dumps({'username': 'admin', 'password':'password123'})
        mock_headers = {'Content-Type': 'application/json'}
        res = api.post('/login', data=mock_data, headers=mock_headers)
        assert res.json['msg'] == 'admin'
        assert len(res.json['token']) > 0
    
    def test_failed_login(self, api):
        mock_data = json.dumps({'username': 'admin', 'password':'notgood'})
        mock_headers = {'Content-Type': 'application/json'}
        res = api.post('/login', data=mock_data, headers=mock_headers)
        assert res.json['msg'] == 'False'

    def test_users_search(self, api):
        res = api.get('/users/search/a')
        assert res.json['users'][0]['username'] == 'admin'