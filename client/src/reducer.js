import { combineReducers } from 'redux'

import markersReducer from './reducers/markersReducer/markersSlice'
import userReducer from './reducers/userReducer/userSlice'
import chatReducer from './reducers/chatReducer'
import membersReducer from './reducers/membersReducer'


const rootReducer = combineReducers({
    markers: markersReducer,
    user: userReducer,
    chat: chatReducer,
    members: membersReducer
})

export default rootReducer
