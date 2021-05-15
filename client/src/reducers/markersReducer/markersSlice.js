const initialState = {
    markers: [
        { id: 0, long: '-73.985664', lat: '40.748441', name: 'Empire State Building', comment: 'Hey! I wanna be here next year!', username: 'Beth'},
        { id: 1, name: 'Rockefeller Centre', comment: '', username: 'Michael'},
        { id: 2, name: 'Brooklyn Bridge', comment: '', username: 'Semhar'}
    ],
} 

function nextMarkerId(markers) {
    const maxId = markers.reduce((maxID, marker) => Math.max(marker.id, maxId), -1)
    return maxId + 1
}

const markersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'markers/markerAdded': {
            return [
                ...state,
                {
                id: nextMarkerId(state),
                long: action.payload,
                lat: action.payload,
                name: action.payload,
                comment: action.payload,
                username: action.payload
                }
            ] 
        }    
        case 'markers/markerSelected': {
            return state.map((marker) => {
                if (marker.id !== action.payload) {
                    return marker
                }

                return {
                    ...marker,
                    long: marker.long,
                    lat: marker.lat,
                }
            })
        }
        case 'markers/markerDeleted': {
            return state.filter((marker) => marker.id !== action.payload)
        }
        default:
            return state;
    }
}
export default markersReducer