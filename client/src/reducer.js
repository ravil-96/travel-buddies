import { combineReducers } from 'redux'

import markersReducer from './reducers/markersReducer/markersSlice'
import userReducer from './reducers/userReducer/userSlice'
import chatReducer from './reducers/chatReducer/chatSlice'

const rootReducer = combineReducers({
    markers: markersReducer,
    user: userReducer,
    chat: chatReducer
})

export default rootReducer
