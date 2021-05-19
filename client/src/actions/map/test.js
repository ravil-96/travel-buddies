import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';

const middleware = [thunk]
const mockStore = configureStore(middleware)
let store = mockStore()

jest.mock('axios');

const addMarker = (marker)=> ({type: 'ADD_MARKER', payload: marker}) 
const clearMarkers = () => ({type: 'CLEAR_MARKERS'})

describe('map actions', () => {
    it('should dispatch action to add marker', () => {
        const initialState = {}
        let store = mockStore(initialState)

        store.dispatch(addMarker())

        const actions = store.getActions()
        const expectedPayload = { type: 'ADD_MARKER'}
        expect(actions).toEqual([expectedPayload])
    })

    it('should dispatch action to clear markers', () => {
        const initialState = {}
        const store = mockStore(initialState)

        store.dispatch(clearMarkers())

        const actions = store.getActions()
        const expectedPayload = { type: 'CLEAR_MARKERS'}
        expect(actions).toEqual([expectedPayload])
    })
})

describe('map async actions', () => {
    beforeEach(() => {
        store.clearActions()
    })

    const holidayData = {
        "holidays": [
            {
                "creator": 2,
                "id": 2,
                "title": "Russia!"
            }
        ],
        "markers": [
            {
                "desc": "cool!",
                "holiday_id": 2,
                "id": 2,
                "position_lat": 55.806221736391876,
                "position_long": 37.56445527076722,
                "title": "Stop1"
            },
            {
                "desc": "very nice...",
                "holiday_id": 2,
                "id": 3,
                "position_lat": 61.64816245852389,
                "position_long": 82.16239754509945,
                "title": "Stop2"
            }
        ]
    }

    const membersData = {
        "creator": {
            "user_id": 3,
            "username": "steve"
        },
        "users": []
    }

    it('dispatches LOAD_MARKERS and LOAD_HOLIDAYS after a successful API request', () => {
        axios.get.mockResolvedValue({data: holidayData});
        store.dispatch(actions.loadUserHolidays()).then(() => {
            const expectedActions = [
                { type: 'LOAD_MARKERS',
                  payload: data.markers },
                { type: 'LOAD_HOLIDAYS',
                  payload: data.holidays },
            ]
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('dispatches LOAD_MEMBERS after a successful API request', () => {
        axios.get.mockResolvedValue({data: membersData});
        store.dispatch(actions.loadMembers()).then(() => {
            const expectedActions = [
                { type: 'LOAD_MEMBERS',
                  payload: data.creator },
            ]
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

})