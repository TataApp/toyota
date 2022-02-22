import appConetentRef from "../../references/appContentRef";
import { removeAccessTokenService } from "../storageServices/removeAccessTokenService";
import { removeRefreshTokenService } from "../storageServices/removeRefreshTokenService";

export async function signOut() {
   await removeAccessTokenService();
   await removeRefreshTokenService();
   console.log("SignOut ");
    appConetentRef.current?.props.signOut();
}