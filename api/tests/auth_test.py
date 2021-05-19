import json

def test_home(api):
    res = api.get('/')
    assert res.json == {'msg': 'hello'}

def test_users(api):
    res = api.get('/users')
    assert res.json == {'users':[]}

def test_register(api):
    mock_data = json.dumps({'username': 'admin', 'password':'password123', 'email':'test@test.com'})
    mock_headers = {'Content-Type': 'application/json'}
    res = api.post('/register', data=mock_data, headers=mock_headers)
    assert res.json['msg'] == 'admin'

def test_login(api):
    mock_data = json.dumps({'username': 'admin', 'password':'password123'})
    mock_headers = {'Content-Type': 'application/json'}
    res = api.post('/login', data=mock_data, headers=mock_headers)
    assert res.json['msg'] == 'admin'
    assert len(res.json['token']) > 0

def test_users_search(api):
    res = api.get('/users/search/a')
    assert res.json['users'][0]['username'] == 'admin'