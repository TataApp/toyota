
var horizontalFlatListData=[
    {
    hour:"1 AM",
    status:"md-rainy",
    degrees:57
},
{
    hour:"1 AM",
    status:"md-rainy",
    degrees:57
},
{
    hour:"1 AM",
    status:"md-rainy",
    degrees:57
},
{
    hour:"1 AM",
    status:"md-rainy",
    degrees:57
},
{
    hour:"1 AM",
    status:"md-rainy",
    degrees:57
},
{
    hour:"1 AM",
    status:"md-rainy",
    degrees:57
},
{
    hour:"1 AM",
    status:"md-rainy",
    degrees:57
},
{
    hour:"1 AM",
    status:"md-rainy",
    degrees:57
},



];



export{horizontalFlatListData};









// import React, { useEffect, useState }  from 'react'
// import { Platform, StyleSheet,FlatList, SafeAreaView, View  ,Image} from 'react-native'
// //import { View } from "../../components/themed/View"
// //import { Text } from "../../components/themed/Text"
// //mport { FlatList } from 'react-native-gesture-handler'

// import {horizontalFlatListData} from '../../data/horizontalFlatListData'
// import { ActivityIndicator } from 'react-native-paper'






// export default function GivingAnOffer() {

// const [data, setdata] = useState([]);
// const [isLoading, setisLoading] = useState(true)


// useEffect(() => {
//     getListPhoto();
    
//     return () => {
        
//     }
// }, [])

// const getListPhoto = () => {
//     const apiURL='https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1';
//     fetch(apiURL)
//     .then((res)=> res.json())
//     .then((resJson)=>{
//         setdata(resJson);
//     }).catch((error)=>{
//         console.log('Requst API Error: ',error );
        
//     }).finally(()=>setisLoading(false))
    
// }


// const renderItem = ({item , index }) => {

//     return(
//         <View
//         style={styles.item}
//         >

//         <Image 

//         style={styles.image}
//         source={{uri: item.url}}
//         resizeMode='contain'
//         />

//         </View>

//     )

// }



//     return (

//         <SafeAreaView style={styles.container}>
//            {isLoading ? <ActivityIndicator/> : (
//                <FlatList
//                data={data}
//                renderItem={renderItem}
//                keyExtractor={ item => `key-${item.id}` }
//                />
//            )} 
//         </SafeAreaView>
      
//     );
// };

// const styles = StyleSheet.create({
//     container:{
//         flex:1
//     },
//     item:{
//         borderWidth:0.5,
//         padding: 8,
//         borderRadius:10,
//         justifyContent:'center'
//     },
//     image:{
//         width:100 ,
//         height:100 ,

//     }
// })
