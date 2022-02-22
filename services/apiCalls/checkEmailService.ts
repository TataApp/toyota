import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function checkEmailService(email: string) {
    console.log("email:  ");

    let response = await axios.post<ResponseWithData<CheckEmailData>>(ApiRoutes.checkEmail, {
        email
    })

    console.log("email:  " + response.data.data.exists);


    return response.data;
}