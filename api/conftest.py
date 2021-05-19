import pytest
import app 

@pytest.fixture
def api():
    api = app.app.test_client()
    return api