

import React, { useEffect, useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontSize } from '../../constants/FontSize';
import { Card } from 'native-base';
import { useLocale } from '../../hooks/useLocale';
import { FontAwesome } from '@expo/vector-icons';
import { Transition, Transitioning } from 'react-native-reanimated';

import { useThemeColor } from '../../hooks/useThemeColor'
import DashedLine from 'react-native-dashed-line';
import { getTripService } from '../../services/apiCalls/getTripService';
import axios from 'axios';
import ApiRoutes from '../../constants/ApiRoutes';
import { getAccessTokenForUsageService } from '../../services/helper/getAccessTokenForUsageService';

import { useIsFocused } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';


const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
)




export default function MyLoads() {

  // const isFocused = useIsFocused(); 

//   const [state, setState] = useState({
//     persons:[]
// });



  const [currentIndex, setcurrentIndex] = useState(0)
  const [confirmed, setconfirmed] = useState(true)
  const [acceptedFromDriver, setacceptedFromDriver] = useState(false)
  const [placeHasBeenReached, setplaceHasBeenReached] = useState(false)
  const [goodsMoved, setgoodsMoved] = useState(false)
  const [operationText, setoperationText] = useState("Confirmed")
  const ref = React.useRef();

  const [trip, setTrip] = useState([])


  const getTrip = async () => {
    let response = await getTripService();

    if (response == null) {
      console.log("there is no trips!")
    }
    if (response) {

      // setState({persons:response})
      // console.log("state in Get :" + state)


      // console.log("data=>: " + response.toWhere)
      let customerPhone = response.customerPhone;
      let fromWhere = response.fromWhere;
      let toWhere = response.toWhere;
      let tripDate = response.tripDate;
      let tripDetailes = response.tripDetailes;
      let tripId = response.tripId;
      let tripServis = response.tripServis;
      let houseType = response.houseType; //
      let vehicleType = response.vehicleType;
      let Assistants = response.assistants;
      let randomIdForTrip = response.randomIdForTrip;
      let price = response.price;
      let tripTime = '';
      let image = 1;
      let index = 2;
      let no = 1;
      console.log(response.customerPhone, response.fromWhere, response.toWhere, response.tripDate, response.tripDetailes, response.tripId, response.tripServis,)
      setTrip([...trip, { customerPhone, fromWhere, toWhere, tripDate, tripDetailes, tripId, tripServis, houseType, vehicleType, Assistants, randomIdForTrip, price, tripTime, image, index, no }])
      // setTrip([{customerPhone,fromWhere,toWhere,tripDate,tripDetailes,tripId,tripServis,tripTime,image,index,no}])
      // setTrip(trip.splice(1));

    }
  }
  // {isFocused && getTrip()}

  // useEffect(() => {

  //   getTrip()
  // });

  useFocusEffect(
    React.useCallback(() => {
     getTrip();
    }, [])
    
  );

  return (


    <Transitioning.View
      ref={ref}
      style={{ backgroundColor: '#f2f2f7', flex: 1 }}
      transition={transition}

    >
      <FlatList
        style={{ marginTop: 30 }}
        data={trip}
        keyExtractor={(item) => item.randomIdForTrip.toString()}
        // horizontal={true}

        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ flexGrow: 1 }} onPress={() => {
              ref.current.animateNextTransition();
              setcurrentIndex(item.index === currentIndex ? 0 : item.index)
            }}>
              <Card style={styles.listItem}>

                <View style={{ flexDirection: "row", padding: 20, paddingBottom: 10 }}>

                  <View style={{
                    //   flex: 1,
                    backgroundColor: "#ffffff",
                    borderColor: "#C9C9C9",
                    borderWidth: 1,
                    borderRadius: 20,
                    height: 80,
                    width: 120
                  }}>

                    <View style={{ justifyContent: "center", alignContent: "center", flex: 1, paddingLeft: 10 }}>

                    {item.vehicleType == 0 &&
                        <Image
                          style={{ width: 100, height: 40 }}
                          source={require('../../assets/images/xlarge_kamyon.png')}
                        />
                      }
                      {item.vehicleType == 1 &&
                        <Image
                          style={{ width: 100, height: 40 }}
                          source={require('../../assets/images/mini_kamyon.png')}
                        />
                      }
                      {item.vehicleType == 2 &&
                        <Image
                          style={{ width: 100, height: 45 }}
                          source={require('../../assets/images/large_kamyon.png')}
                        />
                      }
                      {item.vehicleType == 3 &&
                        <Image
                          style={{ width: 100, height: 40 }}
                          source={require('../../assets/images/xlarge_kamyon.png')}
                        />
                      }
                    </View>

                  </View>


                  <View style={styles.infoContainer}>

                  {item.vehicleType == 0 &&
                      <View>
                        <Text style={styles.infoText}>
                          TN-{item.randomIdForTrip}
                        </Text>
                        <Text style={styles.infoText}>
                        Büyük kamyon
                        </Text>
                      </View>
                    }
                    {item.vehicleType == 1 &&
                      <View>
                        <Text style={styles.infoText}>
                          TN-{item.randomIdForTrip}
                        </Text>
                        <Text style={styles.infoText}>
                          Küçük kamyon
                        </Text>
                      </View>
                    }
                    {item.vehicleType == 2 &&
                      <View>
                        <Text style={styles.infoText}>
                          TN-{item.randomIdForTrip}
                        </Text>
                        <Text style={styles.infoText}>
                          Orta kamyon
                        </Text>
                      </View>
                    }
                    {item.vehicleType == 3 &&
                      <View>
                        <Text style={styles.infoText}>
                          KH-{item.randomIdForTrip}
                        </Text>
                        <Text style={styles.infoText}>
                          Büyük kamyon
                        </Text>
                      </View>
                    }

                  </View>


                  {item.no === 0 &&
                    <View style={styles.smallButton} >
                      <FontAwesome style={{ paddingTop: 4 }} name={"check-circle"} color={"#666666"} size={FontSize.xxxLarge}></FontAwesome>
                      <Text style={{
                        color: "#666666",
                        fontSize: 16,
                        fontWeight: "400",
                        marginLeft: 4
                      }}>
                        {useLocale({}, ('done'))}
                      </Text>
                    </View>
                  }

                </View>




                <View style={{ flexDirection: "row", marginLeft: 20 }}>

                  <View style={styles.OperationBar} />

                  {acceptedFromDriver == true ? <View style={styles.OperationBar} >
                    <Text style={{ fontSize: FontSize.xxSmall, color: '#A8E763', marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>Kabul edildi</Text>
                  </View>
                    :
                    <View style={styles.OperationBarFalse} />
                  }
                  {placeHasBeenReached == true ? <View style={styles.OperationBar} >
                    <Text style={{ fontSize: FontSize.xxSmall, color: '#A8E763', marginLeft: 0, marginTop: 10, fontWeight: 'bold' }}>Konumda</Text>
                  </View>
                    :
                    <View style={styles.OperationBarFalse} />
                  }
                  {goodsMoved == true ?
                    <View style={styles.OperationBar} >
                      <Text style={{ fontSize: FontSize.xxSmall, color: '#A8E763', marginLeft: 0, marginTop: 10, fontWeight: 'bold' }}>ُTransfer edildi</Text>
                    </View>
                    :
                    <View style={styles.OperationBarFalse} />
                  }

                </View>



                {confirmed == true && <Text style={{ fontSize: FontSize.xxSmall, color: '#A8E763', marginLeft: 55, marginTop: 5, fontWeight: 'bold' }}>Kayıtlı</Text>}
                {/* {acceptedFromDriver == true &&    <Text style={{ fontSize: FontSize.Small, color: '#A8E763', marginLeft: 30, marginTop: 10, fontWeight: 'bold' }}>Accepted From Driver</Text>}
                {placeHasBeenReached == true &&     <Text style={{ fontSize: FontSize.Small, color: '#A8E763', marginLeft: 30, marginTop: 10, fontWeight: 'bold' }}>Place Has Been Reached</Text>}
                {goodsMoved == true &&   <Text style={{ fontSize: FontSize.Small, color: '#A8E763', marginLeft: 30, marginTop: 10, fontWeight: 'bold' }}>GoodsMoved</Text>} */}






                <View
                  style={{
                    // borderColor:"#C9C9C9",
                    marginTop: 15,
                    marginBottom: 10,
                    borderBottomColor: '#C9C9C9',
                    borderBottomWidth: 1,
                  }}
                />



                <View>

                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <FontAwesome style={styles.view2circle} color="#A5EA6D" size={FontSize.Regular} name={"circle"} />
                      <View style={{
                        borderStyle: "dotted",
                        height: 35,
                        marginTop: 2,
                        marginBottom: 2,
                        borderColor: "#9F9F9F",
                        marginLeft: 26,
                        borderLeftWidth: 5,
                        borderRadius: 3,
                        // borderWidth: 1,

                      }} />
                      <FontAwesome style={styles.view2circle} color="#C4666D" size={FontSize.Regular} name={"circle"} />
                    </View>




                    <View>
                      <View style={styles.view2}>
                        <Text style={{ fontSize: 16 }} >{useLocale({}, ('FromWhere'))}</Text>
                      </View>
                      <Text style={{ marginLeft: 10 }} >{item.fromWhere} </Text>

                      <View style={styles.view3}>
                        {/* <FontAwesome style={styles.view2circle} color="#C4666D" size={FontSize.Regular} name={"circle"} /> */}
                        <Text style={{ fontSize: 16 }} >{useLocale({}, ('toWhere'))}</Text>
                      </View>
                      <Text style={{ marginLeft: 10, paddingBottom: 10 }} >{item.toWhere} </Text>

                    </View>

                  </View>




                  {item.index === currentIndex && (

                    <View>

                      <View
                        style={{
                          // borderColor:"#C9C9C9",
                          marginTop: 10,
                          marginBottom: 10,
                          borderBottomColor: '#C9C9C9',
                          borderBottomWidth: 1,
                        }}
                      />





                      <View>
                        <View style={{ flexDirection: "row" }}>

                          <View>
                            <Text style={styles.infoText1}> {useLocale({}, 'shippingDate')}</Text>
                            <Text style={styles.infoText}>{item.tripDate}</Text>
                          </View>

                          <View>
                            <Text style={styles.infoTextShippingDate}> {useLocale({}, 'shippingTime')}</Text>
                            <Text style={styles.infoTextShippingDate2}>{item.tripTime} 09:30 AM</Text>
                          </View>

                        </View>


                        <View style={{ flexDirection: "row" }}>
                          <View >
                            <Text style={styles.infoText1}> Fiyat</Text>
                            <Text style={styles.infoText}>{item.price} TL</Text>
                          </View>
                          <View style={{ paddingLeft: 75 }}>
                            <Text style={styles.infoText1}> {useLocale({}, "PhoneLabel")}</Text>
                            <Text style={styles.infoText}>{item.customerPhone} </Text>
                          </View>
                        </View>

                      </View>




                      <View>

                        {item.tripServis == 1 &&
                          <View style={{ flexDirection: "row" }}>

                            <View>
                              <Text style={styles.infoText1}> {useLocale({}, 'service')}</Text>
                              <Text style={styles.infoText}>Ev taşima</Text>
                            </View>

                            {item.houseType == 1 &&
                              < View >
                                <Text style={styles.infoTextHouseType}> {useLocale({}, 'HouseType')}</Text>
                                <Text style={styles.infoTextHouseType2}>"1 + 0"</Text>
                              </View>
                            }
                            {item.houseType == 2 &&
                              < View >
                                <Text style={styles.infoTextHouseType}> {useLocale({}, 'HouseType')}</Text>
                                <Text style={styles.infoTextHouseType2}>"1 + 1"</Text>
                              </View>
                            }
                            {item.houseType == 3 &&
                              < View >
                                <Text style={styles.infoTextHouseType}> {useLocale({}, 'HouseType')}</Text>
                                <Text style={styles.infoTextHouseType2}>"2 + 1"</Text>
                              </View>
                            }
                            {item.houseType == 4 &&
                              < View >
                                <Text style={styles.infoTextHouseType}> {useLocale({}, 'HouseType')}</Text>
                                <Text style={styles.infoTextHouseType2}>"3 + 1"</Text>
                              </View>
                            }
                            {item.houseType == 5 &&
                              < View >
                                <Text style={styles.infoTextHouseType}> {useLocale({}, 'HouseType')}</Text>
                                <Text style={styles.infoTextHouseType2}>"Diğer"</Text>
                              </View>
                            }

                          </View>
                        }




                        {item.tripServis == 2 &&
                          <View>

                            <View style={{ flexDirection: "row" }}>

                              <View>
                                <Text style={styles.infoText1}> {useLocale({}, 'service')}</Text>
                                <Text style={styles.infoText}>Parça eşya</Text>
                              </View>

                              <View>
                                <Text style={styles.infoTextHouseType}> {useLocale({}, "VehicleType")}</Text>
                                {item.vehicleType == 1 &&
                                  <Text style={styles.infoTextHouseType2}>Küçük kamyon</Text>
                                }
                                 {item.vehicleType == 2 &&
                                  <Text style={styles.infoTextHouseType2}>Orta kamyon</Text>
                                }
                                 {item.vehicleType == 3 &&
                                  <Text style={styles.infoTextHouseType2}>Büyük kamyon</Text>
                                }
                              </View>

                            </View>

                            <View style={{ flexDirection: "row" }}>

                              <View>
                                <Text style={styles.infoText1}> {useLocale({}, "AssistantService")}</Text>
                                <Text style={styles.infoText}>{item.Assistants}</Text>
                              </View>

                            </View>

                          </View>


                        }
                        {item.tripServis == 3 &&
                          <View style={{ flexDirection: "row" }}>
                            <View>
                              <Text style={styles.infoText1}> {useLocale({}, 'service')}</Text>
                              <Text style={styles.infoText}> Ofisimi taşıyorum</Text>
                            </View>
                          </View>
                        }

                      </View>



                      {/* 

                      <View
                        style={{
                          // borderColor:"#C9C9C9",
                          marginTop: 10,
                          marginBottom: 10,
                          borderBottomColor: '#C9C9C9',
                          borderBottomWidth: 1,
                        }}
                      /> */}




                      {/* <View >
                        <Text style={styles.infoText1}> {useLocale({}, 'photos')}</Text>
                        <View style={{ justifyContent: "center", alignContent: "center", flex: 1, paddingLeft: 10, flexDirection: "row" }}>
                          <Image
                            style={{ width: 90, height: 60 }}
                            source={require('../../assets/images/shipper.jpg')}
                          />
                          <Image
                            style={{ width: 90, height: 60 }}
                            source={require('../../assets/images/shipper.jpg')}
                          />
                          <Image
                            style={{ width: 90, height: 60 }}
                            source={require('../../assets/images/shipper.jpg')}
                          />
                        </View>

                      </View> */}


                      <View
                        style={{
                          // borderColor:"#C9C9C9",
                          marginTop: 10,
                          marginBottom: 10,
                          borderBottomColor: '#C9C9C9',
                          borderBottomWidth: 1,
                        }}
                      />


                      <View >
                        <Text style={styles.infoText1}> {useLocale({}, 'Details')}</Text>
                        <Text style={{ marginLeft: 27, marginBottom: 15 }}>
                          {item.tripDetailes}
                        </Text>

                      </View>




                      <View>

                        <TouchableOpacity style={styles.commandButton}  >
                          <Text style={styles.panelButtonTitle}>{useLocale({}, 'deleteOffer')}</Text>

                        </TouchableOpacity>
                      </View>

                    </View>
                  )}



                </View>


              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </Transitioning.View >
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  listItem: {
    //  flexDirection: "row",
    // padding: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    borderRadius: 28,
    justifyContent: "space-between",

  },
  button: {
    //alignItems: "center",
    fontSize: 50,
    backgroundColor: "#E7EAF2",
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    borderRadius: 50,
  },
  commandButton: {
    padding: 15,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: '#C4666D',
    alignItems: 'center',
    marginTop: 10,
  },
  smallButton: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 14,
    marginLeft: 25,
    marginRight: 50,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#919191",
    marginBottom: 35,
    borderRadius: 10,
    backgroundColor: '#ffff',
    alignItems: 'center',

  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  styleForDateAndTime: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent:'center'


  }, infoContainer: {
    flexDirection: "column"
  },
  infoText: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 2,
    marginLeft: 15,
    marginBottom: 3,
    // color:"red"
    

  },
  infoText1: {
    color: "#9F9D9D",
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 25,
    paddingTop: 2,
  }, infoTextShippingDate: {
    color: "#9F9D9D",
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 55,
    paddingTop: 2,
  }, infoTextShippingDate2: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 2,
    marginLeft: 45,
    marginBottom: 3
  }, infoTextHouseType: {
    color: "#9F9D9D",
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 78,
    paddingTop: 2,
  }, infoTextHouseType2: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 2,
    marginLeft: 67,
    marginBottom: 3
  },
  view2: {

    flexDirection: 'row',
    paddingTop: 0,
    //  paddingBottom: 0
  },
  view3: {
    flexDirection: 'row',
    //paddingTop: 20,
    paddingTop: 15
  },
  view2circle: {
    // paddingBottom: 400,
    paddingLeft: 20,
    paddingRight: 30,

  }, OperationBar: {
    width: 30 * 2,
    height: 7,
    marginLeft: 25,
    borderRadius: 6,
    backgroundColor: "#A5EA6D",

  },
  OperationBarFalse: {
    width: 30 * 2,
    height: 7,
    marginLeft: 10,
    borderRadius: 6,
    backgroundColor: "#DEDEDE",
  },

});
