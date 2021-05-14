const markersState = {
    markers: [
        { id: 0, name: 'Empire State Building', comment: '', username: 'Beth'},
        { id: 1, name: 'Rockefeler Centre', comment: '', username: 'Michael'},
        { id: 2, name: 'Brooklyn Bridge', comment: '', username: 'Semhar'}
    ],
    // filters: {
    //     date: ['oldest', 'latest']
    // }
} 

const markersReducer = (state=markersState, action) => {
    switch(action.type) {
        case 'LOAD_MARKER':
            return ({
                ...state,
                marker: action.payload,
             })
        default:
            return state;
    }
}
export default markersReducer