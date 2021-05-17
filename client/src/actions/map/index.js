import axios from 'axios'

export const addMarker = (marker)=> ({type: 'ADD_MARKER', payload: marker})  

export async function fetchMarkers(dispatch, getState) {
    const response = await axios.get('http://localhost:5000/holidays/<id>')
    dispatch({ type: 'markers/markersAdded', payload: response.markers })
}