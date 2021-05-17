import axios from 'axios'

export const addMarker = (marker)=> ({type: 'ADD_MARKER', payload: marker})  

export const clearMarkers = () => ({type: 'CLEAR_MARKERS'})  

export const loadUserHolidays = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:5000/users/${id}/holidays`)
        
            let markers = data.markers
            let holidays = data.holidays
            dispatch({
                type: 'LOAD_MARKERS',
                payload: markers
            })
            dispatch({
                type: 'LOAD_HOLIDAYS',
                payload: holidays
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}

export const loadHoliday = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:5000/holidays/${id}`)
        
            let markers = data.markers
            let holiday = data.holiday
            dispatch({
                type: 'LOAD_MARKERS',
                payload: markers
            })
            // dispatch({
            //     type: 'LOAD_HOLIDAY_INFO',
            //     payload: holiday
            // })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}