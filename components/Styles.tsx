import { Dimensions, StyleSheet } from "react-native"
import { FontSize } from "../constants/FontSize"
// import { useThemeColor } from "../hooks/useThemeColor"

const styles= StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",

    },
    titleText:
    {
        fontSize: FontSize.Large,
        paddingTop: 70,
        marginLeft: 30,
        color: 'black',

    }, newUser: {
        paddingBottom: 10,
        marginLeft: 100,
        color: "#736e6e",
        fontWeight: "bold",


    }, topLabel: {
        //paddingBottom: 40,
        marginBottom: 80,
        marginLeft: 20,
        fontSize: 20,
        // color: useThemeColor({}, "gri")
        color: "#939492",


    }, topLabel4: {
        //paddingBottom: 40,
        marginBottom: 80,
        marginLeft: 20,
        fontSize: 20,
        // color: useThemeColor({}, "gri")
        color: "#939492",

    },
    center: {
        width: '100%',
        //  flex: 1,
        alignItems: "center",
        justifyContent: "center",
     
    },
    center2: {
        width: '100%',
        //  flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 3,
        paddingTop: 30
    },
    flex1: {
        flex: 1,
    },
    rowFlex: {
        flexDirection: 'row'
    },
    spaceBetween: {
        justifyContent: 'space-between',
    }, background: {
        backgroundColor: '#ffff',
    },
    commandButtonSmall: {
        padding: 15,
        marginLeft: 10,
        paddingRight: 20,
        marginRight: 5,
        marginBottom: 0,
        borderRadius: 12,
        backgroundColor: '#39A1A3',
        alignItems: 'center',

        flexDirection: "row",
    }, commandButton: {
        padding: 15,
        width: Dimensions.get('window').width / 1.3,
        borderRadius: 12,
        borderColor: '#39A1A3',
        borderWidth: 1,
        backgroundColor: "#39A1A3",
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: "row",
    }, panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        // marginLeft: 35,
        paddingRight: 60,
        paddingLeft: 60
    }, UUIDview: {
        // backgroundColor: useThemeColor({}, ("lightGri")),
        backgroundColor: "#f2f2f2",
        marginLeft: 20,
        height: 60,
        width: Dimensions.get("window").width / 1.1,
        alignItems: "center",
        justifyContent: "center",

    }, separator: {
        borderBottomColor: '#c7c7c7',
        borderBottomWidth: 1,
      }
})
export default styles;