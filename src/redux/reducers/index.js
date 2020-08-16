import { combineReducers } from "redux";
import userReducers from './users';
import appReducers from './app';

const rootReducer = combineReducers({
    userDetails: userReducers,
    appDetails: appReducers
});

export default rootReducer;