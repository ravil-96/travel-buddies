import React from 'react'
import { useSelector } from 'react-redux' 
import MarkerListItem from './MarkerListItem'

const selectMarkers = state => state.markers
// How should we exactly select markers?


const MarkerList = () => {
    const markers = useSelector(selectMarkers)

    const renderedListItems = markers.map(marker => {
        return <MarkerListItem key={marker.id} marker={marker} />
    })

    return <ul className="marker-list">{renderedListItems}</ul>
}

export default MarkerList


