import { ActionType } from "../action-types/index"
import { Action, ActionLayoutMovingCheck } from "../actions"

const initialState = {
    movingCheck1: false,
    movingCheck2: false,
    movingCheck3: false,
    movingCheck4: false,
    movingCheck5: false,
    movingCheck6: false,
    movingCheck7: false,
    movingCheck8: false,
    movingCheck9: false,
};

const reducer = (state = initialState, action: ActionLayoutMovingCheck) => {
    switch (action.type) {
        case ActionType.movingCheck1:
            state.movingCheck1 = action.payload;
            return state
        case ActionType.movingCheck2:
            state.movingCheck2 = action.payload;
            return state;
        case ActionType.movingCheck3:
            state.movingCheck3 = action.payload;
            return state;
        case ActionType.movingCheck4:
            state.movingCheck4 = action.payload;
            return state;
        case ActionType.movingCheck5:
            state.movingCheck5 = action.payload;
            return state;
        case ActionType.movingCheck6:
            state.movingCheck6 = action.payload;
            return state;
        case ActionType.movingCheck7:
            state.movingCheck7 = action.payload;
            return state;
        case ActionType.movingCheck8:
            state.movingCheck8 = action.payload;
            return state;
            case ActionType.toAllMovingCheck:
                state.movingCheck1 = action.payload;
                state.movingCheck2 = action.payload;
                state.movingCheck3 = action.payload;
                state.movingCheck4 = action.payload;
                state.movingCheck5 = action.payload;
                state.movingCheck6 = action.payload;
                state.movingCheck7 = action.payload;
                state.movingCheck8 = action.payload;
                state.movingCheck9 = action.payload;
                return state;
        default:
            return state
    }
}

export default reducer