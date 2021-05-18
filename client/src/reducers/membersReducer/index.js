const initialState = {creator: {}, members: [], currentMembers: []}

const membersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOAD_MEMBERS': {
            return {creator: action.payload.creator, members: action.payload.users,  currentMembers: []}
        }
        case 'CURRENT_MEMBERS': {
            return {creator: state.creator, members: state.members,  currentMembers: action.payload}
        }
        case 'CLEAR_MEMBERS': {
            return {creator: {}, members: []} 
        }
        default:
            return state;
    }     
}

export default membersReducer