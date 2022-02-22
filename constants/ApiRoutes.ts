const API_URL = "http://192.168.0.113:5000"
//"http://192.168.1.9:5000"
//"http://10.211.55.6:5000"
//192.168.1.11
export default { 
  checkPhone: API_URL + "/api/Auth/CheckPhoneExists", 
  checkEmail: API_URL + "/api/Auth/CheckEmailExists",
  signUp: API_URL + "/api/Auth/SignUp",
  signIn: API_URL + "/api/Auth/SignIn",
  changePassword: API_URL + "/api/Auth/changePassword",

  refreshToken: API_URL + "/api/Token/Refresh",
  revokeToken: API_URL + "/api/Token/Revoke",

  GetMyProfile: API_URL + "/api/Profile/GetMyProfile",
  createMyProfile: API_URL + "/api/Profile/CreateMyProfile",
  editMyProfile: API_URL + "/api/Profile/EditMyProfile",

  addTrip: API_URL +"/api/Trip/Add",
  getTrip: API_URL +"/api/Trip/GetTrip",

  SmsCheck: API_URL +"/Add",


};
