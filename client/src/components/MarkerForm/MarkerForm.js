import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const MarkerForm = () => {
    const [name, setName] = useState('')
    const [long, setLong] = useState('')
    const [lat, setLat] = useState('')
    const [comment, setComment] = useState('')
    const [username, setUsername] = useState('')

    const dispatch = useDispatch()

    const handleChange = e => setName(e.target.value)

    const handleKeyDown = e => {
        const trimmedName = e.target.value.trim()
        //where will the long & lat come from?
        if (e.key === 'Enter' & trimmedText) {
            dispatch({ type: 'markers/markerAdded', payload: trimmedName })

            setName('')
        }
    }

    return (
        <div>Here will be a React-Bootstrap form</div>
    )
}
export default MarkerForm