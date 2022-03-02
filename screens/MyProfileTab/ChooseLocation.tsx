import React, {useState} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

//reusable components
import AddressPickup from '../../components/AddressPickup'
import CustomBtn from '../../components/customComponent/CustomBtn'
import { showError, showSuccess } from '../helper/helperFunction';
import { useLocale } from '../../hooks/useLocale';

export default function ChooseLocation(props:any) {
    
    const navigation = useNavigation()
    const [state, setState] = useState({
        pickupCords:{},
        destinationCords: {},
        // formatted_address: ""

    })
    const { destinationCords ,pickupCords} = state

    const checkValid = () =>{
        if(Object.keys(pickupCords).length === 0){
            showError('Lütfen Alış Konumunu Giriniz')  //Please enter your pickup location
            return false
        }
        if(Object.keys(destinationCords).length === 0){
            showError('Lütfen hedef konumunuzu giriniz') //Please enter your destination location
            return false
        }
        return true
    }

    const fetchAddresCords = (lat:any, lng:any, cityText:any) => {
        console.log("lattude: ",lat)
        console.log('longtude: ',lng)
        console.log('cityText: ',cityText)


        setState({
            ...state,
            pickupCords: {
                latitude: lat,
                longitude: lng,
                formatted_address: cityText,
            }
        })


        // console.log("zip code==>>>",zipCode)
        // console.log('city texts',cityText)
        // setState({
        //     ...state,
        //     destinationCords: {
        //         latitude: lat,
        //         longitude: lng
        //     }
        // })
    }

    const fetchDestinationCords = (lat:any, lng:any, cityText:any) => {
        console.log("lattude: ",lat)
        console.log('longtude: ',lng)
        console.log('cityText: ',cityText)
 
        // console.log("zip code==>>>",zipCode)
        setState({
            ...state,
            destinationCords: {
                latitude: lat,
                longitude: lng,
                formatted_address: cityText,
            }
        })
    }
    const onDone = () => {
       
        const isValid = checkValid()
        console.log("is valied: "+isValid)
        if(isValid){
            props.route.params.getCordinates({
                pickupCords,
                destinationCords,
            })
            showSuccess("Konum başarıyla seçildi");
         navigation.goBack()
        }
    }


    // console.log("pickup cords: "+pickupCords.latitude);
    // console.log("distantion cords: "+destinationCords.latitude);

    return (
        <View style={styles.container}>
            <ScrollView
            keyboardShouldPersistTaps="handled"
             style={{backgroundColor:'white' ,flex:1 ,padding:24}}>
                <AddressPickup
                    placheholderText={useLocale({},("EnterPickupLocation"))}
                    fetchAddress={fetchAddresCords}
                />
                <View style={{marginBottom:16}}/>
                <AddressPickup
                    placheholderText={useLocale({},("EnterDistinationLocation"))}
                    fetchAddress={fetchDestinationCords}

                />
                <CustomBtn
                    btnText={useLocale({},("Done"))}
                    onPress={onDone}
                    btnStyle={{marginTop: 24}}
                />
            </ScrollView>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
