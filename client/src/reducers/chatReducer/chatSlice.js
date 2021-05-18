const initialState = []

const chatReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_CHAT': {
            return [
                ...state,
                {user: action.payload.user, content: action.payload.content}
            ] 
        }    
        case 'CLEAR_CHAT': {
            return [] 
        }
        default:
            return state;
    }     
}

export default chatReducer