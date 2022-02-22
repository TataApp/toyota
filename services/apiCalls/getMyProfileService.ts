import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";
import { getAccessTokenForUsageService } from "../helper/getAccessTokenForUsageService";

export async function getMyProfileService()
{   
    let token = await getAccessTokenForUsageService();
    if(token == null)
    {
        return null;
    }

    let response = await axios.get<ResponseWithData<ProfileData>>(ApiRoutes.GetMyProfile,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    return response.data;
}