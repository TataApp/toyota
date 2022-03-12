
import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";
import { showError } from "../../screens/helper/helperFunction";

export async function signInService(email: string, id: string, passward: string) {

    console.log("signInService ")
    console.log("email " + email + " passward " + passward + "  id:" + id)

    try {
        let response = await axios.post<ResponseWithData<SignInData>>(ApiRoutes.signIn, {
            email:"m@m.com",
            id,
            passward
        })

        console.log(response.data)

        return response.data;
        
    } catch (error) {
        showError("error")
    }




}
