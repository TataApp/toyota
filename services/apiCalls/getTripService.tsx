import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ApiRoutes from "../../constants/ApiRoutes";
import { ActionCreators } from "../../state/action-creators";
import { getAccessTokenForUsageService } from "../helper/getAccessTokenForUsageService";
//import { getAccessTokenForUsageService } from "../helper/getAccessTokenForUsageService";

// export async function getTripService()
// {   
//     // let token = await getAccessTokenForUsageService();
//     // if(token == null)
//     // {
//     //     return null;
//     // }

//     let response = await axios.get<ResponseWithData<TripData>>(ApiRoutes.getTrip)
//     .then(res=>{
//      console.log("ffff: "+res)
//     }).catch(err=>{
//         console.log(err)

//     })
//     return response;// response.data;
// }

//  function fadd(dfdkfj:string){
//     const dispach = useDispatch();
//     const { getTrip } = bindActionCreators(ActionCreators, dispach)

// };

export async function getTripService() {

  

    // const [people, setPeople] = useState([
    //     { customerPhone: '', fromWhere: '',toWhere:'',tripDate:'',tripDetailes:'',tripId:'',tripServis:'',tripTime:'', image: require('../../assets/images/large_kamyon.png'), index: 1, no: 1 },
    //   ])



    let token = await getAccessTokenForUsageService();
    if (token == null) {
        console.log("token is null")
        return null;
    }
    console.log("token is not null")

    let response = await axios.get<ResponseWithData<TripData>>(ApiRoutes.getTrip, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // console.log("data: "+response.data.data.customerPhone)
    // getTrip(response.data.data.customerPhone,
    //      response.data.data.fromWhere,
    //      response.data.data.toWhere,
    //      response.data.data.tripDate,
    //      response.data.data.tripDetailes,
    //      response.data.data.tripId,
    //      response.data.data.tripServis,
    //      response.data.data.tripTime,
    //      response.data.data.image,
    //      response.data.data.index,
    //      response.data.data.no,
    //      );

  
    console.log("response.data.data :" + response.data.data)
    return response.data.data;
}


