import React, { useReducer, useState } from "react";
import {Text} from "react-native";
import { View, InputGroup, Input } from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./SerchBoxStyle";
import { useLocale } from "../../../hooks/useLocale";
import { useThemeColor } from "../../../hooks/useThemeColor";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../state/action-creators";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/reducers";

export const SearchBox = ()=> {
	const dispach = useDispatch();
    const { getInputData ,toggleSearchResult } = bindActionCreators(ActionCreators, dispach)

    const stateGetAddressPrediction = useSelector((state: RootState) => state.getAddressPrediction)
    const toggleSearchStat = useSelector((state: RootState) => state.toggleSearch)


const [pickUp, setPickUp] = React.useState("")
const [dropOff, setdropOff] = React.useState("")

const [ignored, forceUbdate] = useReducer(x =>x + 1,0)

function handelClick() {
	forceUbdate();
	
}
		return(
			<View style={styles.searchBox}>
				<View style={styles.inputWrapper}>
					<Text style={styles.label}>PICK UP</Text>
					<InputGroup>
						<Icon name="search" size={15} color={useThemeColor({},"mor")}/>
						<Input onFocus={()=>{
							toggleSearchResult(true)
							handelClick()
                            console.log(stateGetAddressPrediction)
							//console.log(toggleSearchStat.payload)
						}} style={styles.inputSearch} placeholder="Choose pick-up location"  value={pickUp}  onChangeText={text => {
                              setPickUp(text)
							  getInputData(text)

                            }}
					 />
					</InputGroup>
				</View>
				<View style={styles.secondInputWrapper}>
					<Text style={styles.label}>DROP-OFF</Text>
					<InputGroup>
						<Icon  name="search" size={15} color={useThemeColor({},"mor")}/>
						<Input onFocus={()=>{
							toggleSearchResult(true)
							handelClick()
							
							console.log(toggleSearchStat.payload)
						}} style={styles.inputSearch} placeholder="Choose drop-off location" value={dropOff}  onChangeText={text => {
                              setdropOff(text)
							  getInputData(text)

                            }}
							/>
					</InputGroup>
				</View>


			</View>

		);
};

export default SearchBox