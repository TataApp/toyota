import { ActionType } from "../action-types/index"
import {  AddingLocations, GetPhone } from "../actions"

 const initialState={
    phone:''

 }

const reducer = (state = initialState, action: GetPhone) => {
    switch (action.type) {
        case ActionType.GET_PHONE:
            state = action.payload;
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