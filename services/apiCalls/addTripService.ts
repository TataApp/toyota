
import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function addTripService(CustomerPhone: string, FromWhere: string, ToWhere: string, TripDate: string, TripTime: string, TripServis: number, houseType: number, vehicleType: number, Assistants: number, randomIdForTrip: number, Price: number, TripDetailes: string) {

    // Price=3.75 ;
    let price = Math.round( Price );  
    console.log("driverPhone: " + CustomerPhone + " FromWhere: " + FromWhere + " toWhere: " + ToWhere + " TripDate: " + TripDate + "TripTime" + TripTime + " TripServis: " + TripServis + " houseType: " + houseType + " vehicleType: " + vehicleType + " Assistants: " + Assistants + " randomIdForTrip: " + randomIdForTrip + " price: " + price + " tripDetailes: " + TripDetailes)
    try {
        let response = await axios.post(ApiRoutes.addTrip, {
            CustomerPhone,
            FromWhere,
            ToWhere,
            TripServis,
            houseType,
            vehicleType,
            Assistants,
            randomIdForTrip,
            price,
            TripDate,
            TripTime,
            TripDetailes,


        })
        console.log("response.data: "+response.data.data)
        return response.data;

    } catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }



}
