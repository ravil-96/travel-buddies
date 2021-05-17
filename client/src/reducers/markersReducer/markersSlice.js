const initialState = []


function nextMarkerId(markers) {
    const maxId = markers.reduce((maxID, marker) => Math.max(marker.id, maxId), -1)
    return maxId + 1
}

const markersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'markers/markersLoaded': {
            return action.payload
        }
        case 'ADD_MARKER': {
            return [
                ...state,
                {position:action.payload.location, title:action.payload.title, desc:action.payload.desc}
            ] 
        }    
        case 'SELECT_MARKER': {
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