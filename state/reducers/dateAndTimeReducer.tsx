import { ActionType } from "../action-types/index"
import { Action, DateAndTime } from "../actions"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../state/action-creators/index'
import { RootState } from '../../state/reducers';

const initialState = {
    date: "",
    time: "",
    check: false
};

const reducer = (state = initialState, action: DateAndTime): any => {


    switch (action.type) {
        case ActionType.DATE:
            state.date = action.payload;
            return state
        case ActionType.TIME:
            state.time = action.payload;
            return state;
        case ActionType.DATE_AND_TIME_CHECK_ACTION:
            state.check = action.payload;
            return state;
        default:
            return state
    }
}

export default reducer