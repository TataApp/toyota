import { ActionType } from "../action-types/index"
import { Action , ActionForWithoutAccount } from "../actions"

const initialState = 0;

const reducer = (state: number = initialState, action: ActionForWithoutAccount): number => {
    switch (action.type){
        case ActionType.INCREASE_HELBERS:
            return state + action.payload;
        case ActionType.DECREASE_HELBERS:
            return state - action.payload;
        default:
            return state
    }
}

export default reducer