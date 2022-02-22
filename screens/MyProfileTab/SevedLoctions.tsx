

import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import { StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import { Card } from 'native-base'
import { useLocale } from '../../hooks/useLocale'
import { useThemeColor } from '../../hooks/useThemeColor'
import { FontSize } from '../../constants/FontSize'
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'


export default function ProfileInProfile({ navigation }: { navigation: StackNavigationProp<MyProfileParamList> }) {

    const loctionState = useSelector((state: RootState) => state.location)
    const [idx, incr] = useState(2);
    const [Adresess, setAdresess] = useState([
        { name: 'Ahmed - Sakarya', default: 1, id: "0"},
        { name: 'Ramy - Trabzon', default: 0, id: "1" },
    ])
 
    const [exampleState, setExampleState] = useState(Adresess);
    /*
    const [count, setCount] = useState("2");
    const addElement = () => {
        var newArray = [...Adresess , { name: "Obdject "+(idx+1), default:4+idx , id:count}];
        incr(idx + 1);
        setCount(count+1)
      //  console.log(initialElements.length);
        setExampleState(newArray);
       // changeEl(newArray);
      }
*/

    const [textColor, settextColor] = useState("#a6a6a6")
    const [commandButtonSmall2Color, setcommandButtonSmall2Color] = useState("#f2f2f7")

    

    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            backgroundColor: "#f2f2f7",
        }, rectangle: {
    
            width: 180 * 2,
            height: 115,
            borderRadius: 20,
            borderTopRightRadius: 30,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: "#ffff"
    
    
        },
        commandButtonSmall: {
            padding: 3,
            marginLeft: 12,
            marginTop: 10,
            width: 50,
            marginRight:110,
            borderRadius: 9,
            backgroundColor: '#5031C2',
            alignItems: 'center',
            // flexGrow: 1
    
        }, commandButtonSmall2: {
            padding: 3,
            marginLeft: 12,
            marginRight:90,
            marginTop: 10,
            width: 70,
    
            borderRadius: 9,
            backgroundColor: commandButtonSmall2Color,
            alignItems: 'center',
            // flexGrow: 1
    
        }, circle: {
            width: 25,
            height: 25,
            marginTop: 10,
            marginLeft: 10,
            borderRadius: 100 / 2,
            backgroundColor: "#f2f2f7",
            alignItems: 'center',
            justifyContent: 'center'
    
        }, circle2: {
            width: 40,
            height: 40,
            marginTop: 35,
            marginLeft: 10,
            borderRadius: 100 / 2,
            backgroundColor: "#f2f2f7",
            alignItems: 'center',
            justifyContent: 'center'
    
        }
    })
    


    return (
        <View style={styles.container}>

            <FlatList
                extraData={loctionState.locationAdres}
                style={{ marginTop: 80 }}
                data={exampleState}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity  >
                            <View style={styles.rectangle}  >
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity>
                                            <View style={styles.circle}>
                                                <EvilIcons name="trash" size={20} color="#a6a6a6" />
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <View style={styles.circle}>
                                                <Feather name="edit-3" size={15} color="#a6a6a6" />
                                            </View>
                                        </TouchableOpacity>


                                        {item.default == 1 ?
                                            <TouchableOpacity>
                                                <View style={styles.commandButtonSmall} >
                                                    <Text style={{ color: "white", fontSize: 10 }}>default</Text>
                                                </View>
                                            </TouchableOpacity> 
                                            :
                                            <TouchableOpacity onPress={()=>{
                                                settextColor("#ffff")
                                                setcommandButtonSmall2Color("#572ACA")
                                            }}>
                                                <View style={styles.commandButtonSmall2} >
                                                    <Text style={{ color: textColor, fontSize: 10 }}>make default</Text>
                                                </View>
                                            </TouchableOpacity>
                                        }



                                    </View>


                                    <Text style={{ marginTop: 20, marginLeft: 30, fontStyle: 'italic', fontSize: FontSize.Large }}>{useLocale({}, "withinTheCity")}</Text>
                                </View>

                                <Image
                                    style={{  width: 120, height: 116 }}
                                    source={require('../../assets/images/2.png')}
                                />
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />





            <TouchableOpacity onPress={() => { navigation.navigate("placeAddressScreen") }} >
                <View style={styles.rectangle}  >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginTop: 40, marginLeft: 30, fontStyle: 'italic', fontSize: FontSize.Large, color: '#bababa' }}>{useLocale({}, "AddNewPlace")}</Text>
                        <View style={styles.circle2}>
                            <Entypo name="plus" size={24} color="#b8b8ba" />
                        </View>
                    </View>

                    <Image
                        style={{ marginLeft: 30, width: 120, height: 116 }}
                        source={require('../../assets/images/9.png')}
                    />
                </View>
            </TouchableOpacity>

            <Text style={{fontSize:30}}>{loctionState.locationAdres}</Text>

        </View>

    )
}

