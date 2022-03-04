type MainTabParamList = {
    // Teklif vermek
    MainScreen: undefined;
   // Teklif  ver
    GivingAnOffer:undefined;
    //Teklif  ver Tamam sayfasi
    SuccessPage1:undefined;


    
  //Mevcut şoförler
    ExistingDrivers:undefined;
  //Kamyon bilgileri
    TruckInformation:{
        DriverId:number
    };
  // Teklif ver Drivers
    GivingAnOfferDrivers:{
        DriverId:number
    };
    SuccessPage:undefined;
  // Teklif ver Drivers , Tamam sayfasi
   SuccessPage2:{
        DriverId:number
    };
    ConfirmationPhoneCodeScreen:undefined;
    tripDetails:undefined;

    AdressScreen:undefined;
    AddAdresScreen:undefined;
    ChooseLocation:undefined;
    ProfileInProfile:undefined;
}

