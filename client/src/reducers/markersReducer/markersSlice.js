const initialState = []

const markersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOAD_MARKERS': {
            return [
                ...action.payload.map(m => ({title: m.title, desc: m.desc, id: m.id, position: [m.position_lat, m.position_long]}))
            ]
        }
        case 'ADD_MARKER': {
            return [
                ...state,
                {position:action.payload.location, title:action.payload.title, id: action.payload.id,  desc:action.payload.desc}
            ] 
        }    
        case 'CLEAR_MARKERS': {
            return [] 
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
        case 'DELETE_MARKER': {
            return state.filter((marker) => marker.id !== action.payload)
        }
        default:
            return state;
    }
}

export default markersReducer