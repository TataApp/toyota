import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function revokeTokenService():Promise< BaseResponse | null> {
    try {
        console.log("test1")
        let response = await axios.post<BaseResponse>(ApiRoutes.revokeToken)
        console.log("revokeTokenService"+ response.data)
        return response.data;
    }
    catch (err) {
        console.log("here the err")
        console.log(err);
        return null
    }

}