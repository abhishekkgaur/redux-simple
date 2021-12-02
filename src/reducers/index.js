import currentUserReducer from './currentUserReducer'
import counterReducer from './counterReducer'
import { combineReducers } from 'redux'
import multidiviReducer from './multidiviReducer'

console.log('main reducer called...');
const rootReducer = combineReducers({
    currentUserReducer,
    counterReducer,
    multidiviReducer
})

export default rootReducer