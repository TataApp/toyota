import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action, ActionForWithoutAccount, ActionLayoutMovingCheck, AddingLocations, DateAndTime, GetAddressPrediction, GetInputDataOfMap, GetPhone, Gettrip, ToggleSearchResult } from "../actions/index"
import RNGooglePlaces from "react-native-google-places";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

export namespace ActionCreators {


    export const depositMoney = (amount: number) => {
        return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.DEPOSIT,
                payload: amount
            })
        }
    }

    export const withdrawMoney = (amount: number) => {
        return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.WITHDRAW,
                payload: amount
            })
        }
    }

    export const bankrupt = () => {
        return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.BANKRUPT
            })
        }
    }


    //------------------------------------------


    export const increaseNumberOfHelbers = (amount: number) => {
        return (dispatch: Dispatch<ActionForWithoutAccount>) => {
            dispatch({
                type: ActionType.INCREASE_HELBERS,
                payload: amount
            })
        }
    }

    export const decreaseNumberOfHelbers = (amount: number) => {
        return (dispatch: Dispatch<ActionForWithoutAccount>) => {
            dispatch({
                type: ActionType.DECREASE_HELBERS,
                payload: amount
            })
        }
    }

    //------------------------------------------


    export const dateAction = (amount: string) => {
        return (dispatch: Dispatch<DateAndTime>) => {
            dispatch({
                type: ActionType.DATE,
                payload: amount
            })
        }
    }

    export const timeAction = (amount: string) => {
        return (dispatch: Dispatch<DateAndTime>) => {
            dispatch({
                type: ActionType.TIME,
                payload: amount
            })
        }
    }

    export const dateAndTimeCheckAction = (amount: boolean) => {
        return (dispatch: Dispatch<DateAndTime>) => {
            dispatch({
                type: ActionType.DATE_AND_TIME_CHECK_ACTION,
                payload: amount
            })
        }
    }

    //------------------------------------------


    export const movingCheck1 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck1,
                payload: amount
            })
        }
    }
    export const movingCheck2 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck2,
                payload: amount
            })
        }
    }
    export const movingCheck3 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck3,
                payload: amount
            })
        }
    }
    export const movingCheck4 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck4,
                payload: amount
            })
        }
    }
    export const movingCheck5 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck5,
                payload: amount
            })
        }
    }
    export const movingCheck6 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck6,
                payload: amount
            })
        }
    }
    export const movingCheck7 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck7,
                payload: amount
            })
        }
    }
    export const movingCheck8 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck8,
                payload: amount
            })
        }
    }
    export const movingCheck9 = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.movingCheck9,
                payload: amount
            })
        }
    }
    export const toAllMovingCheck = (amount: boolean) => {
        return (dispatch: Dispatch<ActionLayoutMovingCheck>) => {
            dispatch({
                type: ActionType.toAllMovingCheck,
                payload: amount
            })
        }
    }

    //------------------------------------------
    export const addNewLocation = (locationName: string, locationAdres: string) => {
        return (dispatch: Dispatch<AddingLocations>) => {
            dispatch({
                type: ActionType.ADD_NEW_LOCATION,
                locationName: locationName,
                locationAdres: locationAdres
            })
        }

    }

    //------------------------------------------

    export const getInputData = (payload: string) => {
        return (dispatch: Dispatch<GetInputDataOfMap>) => {
            dispatch({
                type: ActionType.GET_INPUT,
                payload: payload
            })
        }

    }

    export const toggleSearchResult = (payload: boolean) => {
        return (dispatch: Dispatch<ToggleSearchResult>) => {
            dispatch({
                type: ActionType.TOGGLE_RESULT,
                payload: payload
            })
        }

    }
    export function getAddressPrediction() {
        const state = useSelector((state: RootState) => state.getMapInput)
        return (dispatch: Dispatch<GetAddressPrediction>) => {
            // console.log("state.payload: "+state.payload)
            RNGooglePlaces.getAutocompletePredictions(state.payload, {
                country: "MY"
            }
            ).then((results) =>
                dispatch({
                    type: ActionType.GET_ADDRESS_PREDICTION,
                    payload: results
                })
            )
                .catch((error) => console.log(error.message));
        };

    }


    //-------------------------------------------------------------
    export const getTrip = (customerPhone: string,
        fromWhere: string,
        toWhere: string,
        tripDate: string,
        tripDetailes: string,
        tripId: any,
        tripServis: any,
        tripTime: string,
        image: any,
        index: any,
        no: any) => {
        return (dispatch: Dispatch<Gettrip>) => {
            dispatch({
                type: ActionType.GET_TRIP,
                customerPhone,
                fromWhere,
                toWhere,
                tripDate,
                tripDetailes,
                tripId,
                tripServis,
                tripTime,
                image,
                index,
                no,
            })
        }

    }

    //--------------------------------------------------------------


    export const getPhone = (payload: string) => {
        return (dispatch: Dispatch<GetPhone>) => {
            dispatch({
                type: ActionType.GET_PHONE,
                payload: payload
            })
        }

    }

}