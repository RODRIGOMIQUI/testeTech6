
import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    appRedux: appReducer
})

export default rootReducer;
