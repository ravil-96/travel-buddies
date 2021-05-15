import React from 'react'
import { useSelector } from 'react-redux'
import MarkerListItem from '../Marker/MarkerListItem'

const selectMarkers = state => state.markers

const MarkerList = () => {
    const markers = useSelector(selectMarkers)
    const markersCreated = useSelector(state => {
        const markersTotal = state.markers
        return markersTotal.length
    })

    const { dateFilter } = useSelector(state => state.filters)

    const renderedListItems = markers.map(marker => {
        return <MarkerListItem key={marker.id} marker={marker} />
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
