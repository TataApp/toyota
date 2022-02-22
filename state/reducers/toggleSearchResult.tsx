import { ActionType } from "../action-types/index"
import { Action, DateAndTime, GetInputDataOfMap, ToggleSearchResult } from "../actions"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../state/action-creators/index'
import { RootState } from '../../state/reducers';

const initialState = {
    payload: false,
};

const reducer = (state = initialState, action: ToggleSearchResult): any => {


    switch (action.type) {
        case ActionType.TOGGLE_RESULT:
            state.payload = action.payload;
            return  state
        default:
            return state
    }
}

export default reducer