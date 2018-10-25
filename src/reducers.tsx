
import { combineReducers } from 'redux';
import appReducer from './main/appReducer';

const rootReducer = combineReducers({
    app: appReducer
})

export default rootReducer;
