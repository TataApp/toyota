import { ActionType } from "../action-types/index"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}



interface increaseHelbers {
    type: ActionType.INCREASE_HELBERS,
    payload: number
}

interface decreaseHelbers {
    type: ActionType.DECREASE_HELBERS,
    payload: number
}

interface date {
    type: ActionType.DATE,
    payload: string
}

interface time {
    type: ActionType.TIME,
    payload: string
}

interface dateAndTimeCheckAction {
    type: ActionType.DATE_AND_TIME_CHECK_ACTION,
    payload: boolean
}


interface movingCheck1 {
    type: ActionType.movingCheck1,
    payload: boolean
}

interface movingCheck2 {
    type: ActionType.movingCheck2,
    payload: boolean
}

interface movingCheck3 {
    type: ActionType.movingCheck3,
    payload: boolean
}

interface movingCheck4 {
    type: ActionType.movingCheck4,
    payload: boolean
}

interface movingCheck5 {
    type: ActionType.movingCheck5,
    payload: boolean
}

interface movingCheck6 {
    type: ActionType.movingCheck6,
    payload: boolean
}

interface movingCheck7 {
    type: ActionType.movingCheck7,
    payload: boolean
}


interface movingCheck8 {
    type: ActionType.movingCheck8,
    payload: boolean
}

interface movingCheck9 {
    type: ActionType.movingCheck9,
    payload: boolean
}
interface toAllMovingCheck {
    type: ActionType.toAllMovingCheck,
    payload: boolean
}


interface AddingLocation {
    type: ActionType.ADD_NEW_LOCATION,
    locationName: string,
    locationAdres:string
}

interface getInputDataOfMap {
    type:ActionType.GET_INPUT,
    payload:string
}

interface toggleSearchResult {
    type:ActionType.TOGGLE_RESULT,
    payload:boolean
}
interface getAddressPrediction {
    type:ActionType.GET_ADDRESS_PREDICTION,
    payload:any
}
interface gettrip {
    type:ActionType.GET_TRIP,
    customerPhone: string,
    fromWhere:string,
    toWhere:string,
    tripDate:string,
    tripDetailes:string,
    tripId:any,
    tripServis:any,
    tripTime:string,
    image: any,
    index: any,
    no: any ,
}
interface getPhone {
    type:ActionType.GET_PHONE,
    payload:any
}


export type Action = DepositAction | WithdrawAction | BankruptAction;
export type ActionForWithoutAccount = increaseHelbers | decreaseHelbers;
export type DateAndTime = date | time | dateAndTimeCheckAction;
export type ActionLayoutMovingCheck = movingCheck1 | movingCheck2 | movingCheck3 | movingCheck4 | movingCheck5 | movingCheck6 | movingCheck7 | movingCheck8 | movingCheck9 |toAllMovingCheck;
export type AddingLocations = AddingLocation;
export type GetInputDataOfMap = getInputDataOfMap;
export type ToggleSearchResult = toggleSearchResult;
export type GetAddressPrediction = getAddressPrediction;
export type Gettrip = gettrip;
export type GetPhone = getPhone;

