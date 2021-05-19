import json
import pytest 

@pytest.mark.usefixtures("teardown")
class TestHoliday():

    def test_create_holiday(self, api):
        mock_data = json.dumps({"title": "Test Holiday", "creator": 1})
        mock_headers = {'Content-Type': 'application/json'}
        res = api.post('/holidays', data=mock_data, headers=mock_headers)
        assert res.json['msg'] == 'success'
        assert type(res.json['id']) == int
    
    def test_create_marker(self, api):
        mock_data = json.dumps({
                "title": "Test Marker",
                "desc": "my test marker",
                "position_lat": 0,
                "position_long": 0,
                "holiday_id": 1})
        mock_headers = {'Content-Type': 'application/json'}
        res = api.post('/maps/marker', data=mock_data, headers=mock_headers)
        assert type(res.json['id']) == int
    
    def test_get_holiday(self, api):
        res = api.get('/holidays/1')
        assert res.json['holiday']['title'] == 'Test Holiday'
        assert res.json['markers'][0]['title'] == 'Test Marker'

    
    def test_get_user_holidays(self, api):
        res = api.get('/users/1/holidays')
        assert res.json['holidays'][0]['title'] == 'Test Holiday'
        assert res.json['markers'][0]['title'] == 'Test Marker'

    def test_add_user_to_holiday(self, api):
        mock_data = json.dumps({"user_id": 1})
        mock_headers = {'Content-Type': 'application/json'}
        res = api.post('/holidays/2/users', data=mock_data, headers=mock_headers)
        assert res.json['data'] == 'success' 

    ## handle this error better!
    #  def test_reject_add_same_user_to_holiday(self, api):
    #     mock_data = json.dumps({"user_id": 1})
    #     mock_headers = {'Content-Type': 'application/json'}
    #     res = api.post('/holidays/2/users', data=mock_data, headers=mock_headers)
    #     assert res.json == ''     
    
    def test_get_holiday_users(self, api):
        res = api.get('/holidays/1/users')
        assert res.json['creator']['user_id'] == 1
        assert res.json['users'][0]['user_id'] == 2
    
    def test_delete_marker(self, api):
        res = api.delete('/maps/marker/1')
        assert res.json == {'msg':'marker deleted', 'marker_id': '1'}
