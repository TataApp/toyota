import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from '../constants/googleMapKey';


const AddressPickup = ({ placheholderText,fetchAddress}:any) => {

    function extractFromAdress(components:any, type:any){
        for (var i=0; i<components.length; i++)
            for (var j=0; j<components[i].types.length; j++)
                if (components[i].types[j]==type) return components[i].long_name;
        return "";
    }
    const onPressAddress = (data:any, details:any) => {
        console.log("details==>>>>", details)
      
        
        var country = extractFromAdress(details.address_components, "country");
        var town = extractFromAdress(details.address_components, "administrative_area_level_1");
        var region = extractFromAdress(details.address_components, "administrative_area_level_2");


        // var city = extractFromAdress(details.address_components, "locality");
        console.log("country==>>>>", country)
        console.log("town==>>>>", town)
        console.log("region==>>>>", region)


        // let resLength = details.address_components
        // let zipCode = ''

        // let filtersResCity = details.address_components.filter(val => {
        //     if (val.types.includes('locality') || val.types.includes('sublocality')) {
        //         return val
        //     }
        //     if (val.types.includes('postal_code')) {
        //         let postalCode = val.long_name
        //         zipCode = postalCode
        //     }
        //     return false
        // })

        // let dataTextCityObj = filtersResCity.length > 0
        //     ? filtersResCity[0] :
        //     details.address_components[
        //     resLength > 1 ? resLength - 2 : resLength - 1
        //     ];

        // let cityText =
        //     dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17
        //         ? dataTextCityObj.short_name
        //         : dataTextCityObj.long_name;

        // // console.log("zip cod found", zipCode)
        // // console.log("city namte", cityText)

        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        const adress = details.formatted_address;
        // const city =details.
        console.log("formatted_address :"+adress);
        // fetchAddress(lat, lng, zipCode, cityText)

        fetchAddress(lat, lng, adress)

    }

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placheholderText}
                onPress={onPressAddress}
                fetchDetails={true}
                query={{
                    key: GOOGLE_MAP_KEY,
                    language: 'en'
                }}
                // filterReverseGeocodingByTypes={['locality', 'administrative_area_level_1']}
                styles={{
                    textInputContainer: styles.containerStyle,
                    textInput: styles.textInputStyle
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerStyle: {
        backgroundColor: 'white'
    },
    textInputStyle: {
        height: 48,
        color: 'black',
        fontSize: 16,
        backgroundColor: '#f3f3f3'
    }
});

export default AddressPickup;