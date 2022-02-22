

import React, { useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { useThemeColor } from '../../hooks/useThemeColor';
import { FontSize } from '../../constants/FontSize';

import { useDispatch , useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../state/action-creators/index'
import { RootState } from '../../state/reducers';



export default function TimeAndDate() {


  const dispach = useDispatch();
  const state = useSelector((state:RootState) => state.dateAndTime) 
  const { dateAction, timeAction , dateAndTimeCheckAction } = bindActionCreators(ActionCreators,dispach )


  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);


  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
   const currentDate = selectedDate || date; 
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    dateAction(date.getUTCFullYear() + "/" +(date.getUTCMonth() + 1 ) + "/" + date.getDate())
    timeAction(date.getHours() +":"+ date.getUTCMinutes() )
    dateAndTimeCheckAction(true)

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>


      <View  >
        <TouchableOpacity
          style={styles.button}
          onPress={showDatepicker}
        >
          <View style={styles.styleForDateAndTime}>
          <FontAwesome style={{ width: 20, height: 20 , marginRight:10 }}  color="#625E5E" size={FontSize.Regular} name={"calendar"} />
            <Text style={{fontSize:15}} >{date.getUTCFullYear()} / {date.getUTCMonth() + 1} / {date.getDate()} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={showTimepicker}
        >
         <View style={styles.styleForDateAndTime}>
         <FontAwesome style={{ width: 20, height: 20 , marginRight:10 }}  color="#625E5E" size={FontSize.Large} name={"clock-o"} />

          <Text style={{fontSize:15}} > {date.getHours()} : {date.getUTCMinutes()}  </Text>
          </View>
        </TouchableOpacity>


      </View>


      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
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
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  styleForDateAndTime: {
     flexDirection:"row",
    // alignItems: "center",
    // justifyContent:'center'


  }

});
















