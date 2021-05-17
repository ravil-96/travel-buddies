import { apiUrl } from '.'
import axios from 'axios';

export const fetchUsers = async (query) => {
        try {
           const { data } = await axios.get(`${apiUrl}/users/${query}`)
           return data.users
        } catch (err) {
            console.warn(err.message)
        }
}