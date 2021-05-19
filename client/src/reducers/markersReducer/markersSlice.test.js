import markersReducer from './markersSlice'

describe('markersReducer', () => {
    test('Selects marker based on id', () => {
        const initialState = [{ id: 0, long: '-73.985664', lat: '40.748441', name: 'Empire State Building', comment: 'Hey! I wanna be here next year!', username: 'Beth'}]
        const action = { type: 'markers/markerSelected', payload: 0 }
        const result = markersReducer(initialState, action)
        expect(result[0].name).toMatch('Empire State Building')
    })
})