import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function signUpService(name:string, email:string, id:string , passward:string) {
    console.log("signUpService");
   // console.log("email: "+ email +"  name: "+ name + " phone: "+id + " passward: "+passward);

    let response = await axios.post<ResponseWithData<SignUpData>>(ApiRoutes.signUp, {
        email,
        name,
        id,
        passward,
    })

    console.log("signUpService2");


    return response.data;
}