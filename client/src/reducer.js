import { combineReducers } from 'redux'

import markersReducer from './reducers/markersReducer/markersSlice'
import userReducer from './reducers/userReducer/userSlice'

const rootReducer = combineReducers({
    markers: markersReducer,
    user: userReducer
})

export default rootReducer
