import { combineReducers } from 'redux'

import markersReducer from './reducers/markersReducer/markersSlice'
import loginReducer from './reducers/loginReducer/loginSlice'

const rootReducer = combineReducers({
    markers: markersReducer,
    login: loginReducer
})

export default rootReducer
