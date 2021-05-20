import configureStore from 'redux-mock-store'
import * as actions from './index'

const middlewares = []
const mockStore = configureStore(middlewares)

const addSocket = (socket) => ({type: 'ADD_SOCKET', payload: socket})
const addChat = (message) => ({type: 'ADD_CHAT', payload: message}) 
const clearChat = (message) => ({type: 'CLEAR_CHAT', payload: message})     
const currentMembers = (members) => ({type: 'CURRENT_MEMBERS', payload: members})

describe('socket actions', () => {
    it('should create an action to add socket', () => {
        const socket = 'test'
        const payload = socket
        const expectedAction = {
            type: 'ADD_SOCKET',
            payload
        }
        expect(actions.addSocket(payload)).toEqual(expectedAction)
    })

    it('should dispatch action to add socket', () => {
        const initialState = {}
        const store = mockStore(initialState)

        store.dispatch(addSocket())

        const actions = store.getActions()
        const expectedPayload = { type: 'ADD_SOCKET'}
        expect(actions).toEqual([expectedPayload])
    })

    it('should dispatch action to add chat', () => {
        const initialState = {}
        const store = mockStore(initialState)

        store.dispatch(addChat())

        const actions = store.getActions()
        const expectedPayload = { type: 'ADD_CHAT'}
        expect(actions).toEqual([expectedPayload])
    })

    it('should dispatch action to clear chat', () => {
        const initialState = {}
        const store = mockStore(initialState)

        store.dispatch(clearChat())

        const actions = store.getActions()
        const expectedPayload = { type: 'CLEAR_CHAT'}
        expect(actions).toEqual([expectedPayload])
    })

    it('should dispatch action to return current members', () => {
        const initialState = {}
        const store = mockStore(initialState)

        store.dispatch(currentMembers())

        const actions = store.getActions()
        const expectedPayload = { type: 'CURRENT_MEMBERS'}
        expect(actions).toEqual([expectedPayload])
    })
})

