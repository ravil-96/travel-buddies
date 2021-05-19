import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';

const middleware = [thunk]
const mockStore = configureStore(middleware)
let store = mockStore()

jest.mock('axios');

describe('auth async actions', () => {
    beforeEach(() => {
        store.clearActions()
    })

    const userData = {
        "users": [
            {
                username: 'Ravil',
                password: 'test1',
                email: 'test@mail.ru'
            }
        ]
    }
    
    it('dispatches USER_LOGIN after a successful API request', () => {
        axios.get.mockResolvedValue({data: userData});
        store.dispatch(actions.userLogin()).then(() => {
            const expectedActions = [
                { type: 'USER_LOGIN',
                  payload: userData.users },
            ]
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('dispatches USER_LOGIN after a successful registration request', () => {
        axios.get.mockResolvedValue({data: userData});
        store.dispatch(actions.userLogin()).then(() => {
            const expectedActions = [
                { type: 'USER_LOGIN',
                  payload: userData.users },
            ]
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})