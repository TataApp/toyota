import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function checkPhoneService(phone: string) {
   console.log("phone: ");

    let response = await axios.post<ResponseWithData<CheckPhoneData>>(ApiRoutes.checkPhone, {
        phone
    })
   console.log("phone: " + response.data.errors);

    return response.data;
}