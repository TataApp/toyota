import jwt_decode from "jwt-decode";

export default function checkTokenExpiry(accessToken: string): boolean {
    console.log("Checking token");

    let decoded = jwt_decode<JWTToken>(accessToken);
    let now = new Date();

    if (decoded.exp >= now.valueOf()/1000)
        return true;
    return false;
}