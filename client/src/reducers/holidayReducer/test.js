import  holidayReducer  from '.'

describe('chatReducer', () => {
    test('it intialises with an empty string', () => {
        const initReturn = holidayReducer(undefined, { type: '@@INIT' })
        expect(initReturn).toEqual("")
    })


test('it returns a new string on load holiday', () => {
    const fakeHoliday = holidayReducer(
        'holiday1',
        { type: 'LOAD_HOLIDAY', payload: 'holiday2'})
    expect(fakeHoliday).toEqual('holiday2')
})


test('it returns an empty string on reset', () => {
    const fakeClear = holidayReducer(
        'holiday1',
        { type: 'CLEAR_HOLIDAY' }
        )
    expect(fakeClear).toEqual('')
})

})