import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const selectMarkerById = (state, markerId) => {
    return state.markers.find(marker => marker.id === markerId)
}

const MarkerListItem = ({ id }) => {
    const marker = useSelector(state => selectMarkerById(state, id))
    const {name, long, lat, comment, username} = marker

    const dispatch = useDispatch()

    const handleMarkerSelected = () => {
        dispatch({ type: 'markers/markerSelected', payload: marker.id})
    }

    return (
        // React-Bootstrap component should go here
        <li>
            <div className="view"></div>
        </li>
    )
}