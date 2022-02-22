import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import {   Card } from 'native-base';
import { connect } from 'react-redux';
import { useDispatch , useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../state/action-creators/index'
import { RootState } from '../../state/reducers';




export default function EmployeeApp() {

    const dispach = useDispatch();
    const state = useSelector((state:RootState) => state.bank) 



    const {depositMoney , withdrawMoney , bankrupt} = bindActionCreators(ActionCreators,dispach )
 
        return (
            <View> 
             <Text style={{marginTop:40}}>{state}</Text>
             <Button onPress={()=>{depositMoney(1000)}} title="DEPOSIT"></Button>
             <Button onPress={()=>{withdrawMoney(500) }} title="WITHDRAW"></Button>
             <Button onPress={()=>{bankrupt()}} title="BANKRUPT"></Button>
           
            </View>
        )
    }


// export default connect(mapStateToProps, mapDispatchToProps)(EmployeeApp);


const styles = StyleSheet.create({})
