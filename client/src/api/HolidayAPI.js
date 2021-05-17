import { apiUrl } from '.'
import axios from 'axios';

export const sendMarker = async (marker) => {
        try {
            await axios.post(`http://localhost:5000/maps/marker`, 
            {
                title: marker.title,
                desc: marker.desc,
                position_lat: marker.position_lat,
                position_long: marker.position_long,
                holiday_id: marker.room
            }
            )
        } catch (err) {
            console.warn(err.message)
        }
}

export const sendHoliday = async (holiday) => {
    try {
        await axios.post(`http://localhost:5000/holidays`, 
        {
            title: holiday.title,
            creator: holiday.creator
        }
        )
    } catch (err) {
        console.warn(err.message)
    }
}