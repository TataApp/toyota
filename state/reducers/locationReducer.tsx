import { ActionType } from "../action-types/index"
import {  AddingLocations } from "../actions"

 const initialState={
    locationName:"",
    locationAdres:"",

 }

const reducer = (state = initialState, action: AddingLocations) => {
    switch (action.type) {
        case ActionType.ADD_NEW_LOCATION:
            state.locationName = action.locationName;
            state.locationAdres = action.locationAdres;
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