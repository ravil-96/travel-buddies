const initialState = ''

const membersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOAD_HOLIDAY': {
            return action.payload
        }
        case 'CLEAR_HOLIDAY': {
            return ''
        }
        default:
            return state;
    }     
}

export default membersReducer