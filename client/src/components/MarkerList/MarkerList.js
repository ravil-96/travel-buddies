import React from 'react'
import { useSelector } from 'react-redux'
import MarkerListItem from '../Marker/MarkerListItem'

const selectMarkersIds = state => state.markers.map(marker => marker.id)

const MarkerList = () => {
    const markersIds = useSelector(selectMarkersIds)
    const markersCreated = useSelector(state => {
        const markersTotal = state.markers
        return markersTotal.length
    })

    const { dateFilter } = useSelector(state => state.filters)

    const renderedListItems = markersIds.map(markerId => {
        return <MarkerListItem key={markerid} id={markerId} />
    })

    return (
    <>
    {/* use React-Bootstrap component here */}
    <div id="marker-list">
        <h5>Your markers</h5>
        <button id="oldest-button">Oldest</button>
        <button id="recent-button">Recent</button>
        <ul className="marker-list">{renderedListItems}</ul>
    </div>

    <h5>Total: {markersCreated}</h5>
    </>
    )
}

export default MarkerList
