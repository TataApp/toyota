import { ActionType } from "../action-types/index"
import {  AddingLocations, Gettrip } from "../actions"

 const initialState={
    customerPhone: '',
     fromWhere: '',
     toWhere:'',
     tripDate:'',
     tripDetailes:'',
     tripId:'',
     tripServis:'',
     tripTime:'',
     image: require('../../assets/images/large_kamyon.png'),
     index: 1,
     no: 1 ,

 }

const reducer = (state = initialState, action: Gettrip) => {
    switch (action.type) {
        case ActionType.GET_TRIP:
            state.customerPhone = action.customerPhone;
            state.fromWhere = action.fromWhere;
            state.toWhere = action.toWhere;
            state.tripDate = action.tripDate;
            state.tripDetailes = action.tripDetailes;
            state.tripId = action.tripId;
            state.tripTime = action.tripTime;
            state.image = action.image;
            state.index = action.index;
            state.no = action.no;
            return state
        default:
            return state
    }

    // switch (action.type){
    //     case ActionType.ADD_NEW_LOCATION:
    //         return [
    //             ...state,{
    //                 locationName:action.locationName,
    //                 locationAdres:action.locationAdres
    //             }
    //         ]
    //     default:
    //         return state
    // }
}

export default reducer