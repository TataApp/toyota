import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import layoutWithoutAccountReducer from "./layoutWithoutAccountReducer";
import dateAndTimeReducer from './dateAndTimeReducer';
import layoutMovingCheck from "./layoutMovingCheck";
import locationReducer from "./locationReducer";
import getInputOfMap from "./getInputOfMap"
import toggleSearchResult from "./toggleSearchResult";
import handelGetAddressPrediction from "./handelGetAddressPrediction";
import tripReducer from "./tripReducer";
import phoneReducer from "./phoneReducer";


const reducers = combineReducers({
    bank: bankReducer,
    WithoutAccount: layoutWithoutAccountReducer,
    dateAndTime: dateAndTimeReducer,
    movingCheck: layoutMovingCheck,
    location:locationReducer,
    getMapInput:getInputOfMap,
    toggleSearch:toggleSearchResult,
    getAddressPrediction:handelGetAddressPrediction,
    getTrip:tripReducer,
    getPhone:phoneReducer,


})

export default reducers

export type RootState = ReturnType<typeof reducers>