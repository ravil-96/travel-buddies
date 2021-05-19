import { apiUrl } from '.'
import axios from 'axios';

export const sendMarker = async (marker) => {
        try {
            const { data } = await axios.post(`${apiUrl}/maps/marker`, 
            {
                title: marker.title,
                desc: marker.desc,
                position_lat: marker.position_lat,
                position_long: marker.position_long,
                holiday_id: marker.room
            }
            )
            return data
        } catch (err) {
            console.warn(err.message)
        }
}

export const deleteMarker = async (mi) => {
    try {
        const { data } = await axios.delete(`${apiUrl}/maps/marker/${mi}`)
        return data
    } catch (err) {
        console.warn(err.message)
    }
}

export const sendHoliday = async (holiday) => {
    try {
        const { data } = await axios.post(`${apiUrl}/holidays`, 
        {
            title: holiday.title,
            creator: holiday.creator
        }
        )
        return data
    } catch (err) {
        console.warn(err.message)
    }
}

export const addHolidayMember = async (hu) => {
    try {
        const { data } = await axios.post(`${apiUrl}/holidays/${hu.id}/users`, 
        {
            user_id: hu.user_id
        }
        )
        return data
    } catch (err) {
        console.warn(err.message)
    }
}

