import { ActionType } from "../action-types/index"
import { Action, DateAndTime, GetAddressPrediction, GetInputDataOfMap } from "../actions"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../state/action-creators/index'
import { RootState } from '../../state/reducers';



const reducer = (state:any={}, action: GetAddressPrediction): any => {
 

    switch (action.type) {
        case ActionType.GET_ADDRESS_PREDICTION:
            state = action.payload;
            return state
            default:
             return state
         }
}

export default reducer