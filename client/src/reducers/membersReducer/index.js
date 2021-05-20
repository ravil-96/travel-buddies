const initialState = {creator: {}, members: [], currentMembers: []}

const membersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOAD_MEMBERS': {
            return {creator: action.payload.creator, members: action.payload.users,  currentMembers: []}
        }
        case 'CURRENT_MEMBERS': {
            return {creator: state.creator, members: state.members,  currentMembers: action.payload}
        }
        case 'ADD_MEMBER': {
            return {creator: state.creator, members: state.members.concat({username: action.payload}),  currentMembers: state.currentMembers}
        }
        case 'CLEAR_MEMBERS': {
            return {creator: {}, members: [], currentMembers: []} 
        }
        default:
            return state;
    }     
}

export default membersReducer