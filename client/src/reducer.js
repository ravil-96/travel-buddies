import { combineReducers } from 'redux'

import markersReducer from './reducers/markersReducer/markersSlice'
import userReducer from './reducers/userReducer/userSlice'
import chatReducer from './reducers/chatReducer/chatSlice'
import membersReducer from './reducers/membersReducer/'
import holidayReducer from './reducers/holidayReducer/'



const rootReducer = combineReducers({
    markers: markersReducer,
    user: userReducer,
    chat: chatReducer,
    members: membersReducer,
    holiday: holidayReducer
})

export default rootReducer
