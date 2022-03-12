import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ApiRoutes from "../../constants/ApiRoutes";
import { ActionCreators } from "../../state/action-creators";
import { getAccessTokenForUsageService } from "../helper/getAccessTokenForUsageService";

export async function getTripsForDriverService() {

  

    let token = await getAccessTokenForUsageService();
    if (token == null) {
        console.log("token is null")
        return null;
    }
    console.log("token is not null")

    let response = await axios.get<ResponseWithData<TripData>>(ApiRoutes.getTripForDriver, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res =>{
        // console.log(res.data)
        //  console.log(res.data)

        return res.data

        
    }).catch(res=>{
        console.log("prb...")
    })

    if (response == null) {
        console.log("there is no trips......!")
    }
    if (response !== null) {
        console.log("there trips......!")
        // console.log("response :" + response.data.data.TripsForDrivers)

    }


   // console.log("response :" + response.data.data.customerPhone)
     return response;
}


