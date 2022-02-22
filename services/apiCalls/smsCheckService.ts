import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function smsCheckService(phone:string) {
    console.log("SmsCheckService");
   // console.log("email: "+ email +"  name: "+ name + " phone: "+id + " passward: "+passward);
   let no = "+201063750451"
    let response = await axios.post<ResponseWithData<CheckSmsData>>(ApiRoutes.SmsCheck, {
        no,
    })

    console.log("SmsCheckResponse: "+ response.status);


    return response.data;
}