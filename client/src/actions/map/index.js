import axios from 'axios'
import { apiUrl } from '../../api'

export const addMarker = (marker)=> ({type: 'ADD_MARKER', payload: marker}) 
export const deleteMarker = (marker)=> ({type: 'DELETE_MARKER', payload: marker}) 

export const clearHoliday = ()=> ({type: 'CLEAR_HOLIDAY'}) 


// export const deleteMarker = (marker) => ({type: 'DELETE_MARKER', payload: marker})

export const clearMarkers = () => ({type: 'CLEAR_MARKERS'})  

export const loadUserHolidays = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${apiUrl}/users/${id}/holidays`)
        
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
            const { data } = await axios.get(`${apiUrl}/holidays/${id}`)
            let markers = data.markers
            let holiday = data.holiday
            dispatch({
                type: 'LOAD_MARKERS',
                payload: markers
            })
            dispatch({
                type: 'LOAD_HOLIDAY',
                payload: holiday.title
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}

export const loadMembers = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${apiUrl}/holidays/${id}/users`)
            dispatch({
                type: 'LOAD_MEMBERS',
                payload: data
            })
            // dispatch({
            //     type: 'LOAD_HOLIDAY_INFO',
            //     payload: holiday
            // })
        } catch (err) {
            console.log(err)
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}