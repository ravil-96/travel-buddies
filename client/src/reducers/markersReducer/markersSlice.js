const initialState = {
    markers: [
        { id: 0, name: 'Empire State Building', comment: '', username: 'Beth'},
        { id: 1, name: 'Rockefeler Centre', comment: '', username: 'Michael'},
        { id: 2, name: 'Brooklyn Bridge', comment: '', username: 'Semhar'}
    ],
    // filters: {
    //     date: ['oldest', 'latest']
    // }
} 

function nextMarkerId(markers) {
    const maxId = markers.reduce((maxID, marker) => Math.max(marker.id, maxId), -1)
    return maxId + 1
}

const markersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'markers/markerAdded':
            return [
                ...state,
                {
                id: nextMarkerId(state),
                name: action.payload,
                comment: action.payload
                }
            ] 
        
        default:
            return state;
    }
}
export default markersReducer