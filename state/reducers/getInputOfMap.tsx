import { ActionType } from "../action-types/index"
import { Action, DateAndTime, GetInputDataOfMap } from "../actions"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../state/action-creators/index'
import { RootState } from '../../state/reducers';

const initialState = {
    payload: "",
};

const reducer = (state = initialState, action: GetInputDataOfMap): any => {


    switch (action.type) {
        case ActionType.GET_INPUT:
            state.payload = action.payload;
            return state
            default:
                return state
         }
}

export default reducer