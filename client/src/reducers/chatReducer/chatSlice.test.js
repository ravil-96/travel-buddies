import  chatReducer  from './chatSlice'

describe('chatReducer', () => {
    test('it intialises with an empty array', () => {
        const initReturn = chatReducer(undefined, { type: '@@INIT' })
        expect(initReturn).toEqual([])
    })


test('it concats message to array when messages are sent', () => {
    const fakeMessage = chatReducer(
        [{"content": "pretest", "user": "pretestuser"}],
        { type: 'ADD_CHAT', payload: {user: 'testuser', content: 'test'}})
    expect(fakeMessage[1]).toEqual({"content": "test", "user": "testuser"})
})


test('it returns an empty array on reset', () => {
    const fakeClear = chatReducer(
        [{user: 'testuser', content: 'test'}],
        { type: 'CLEAR_CHAT' })
    expect(fakeClear).toEqual([])
})

})