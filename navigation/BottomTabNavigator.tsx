import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabBarIcon from '../components/TabBarIcon';
import MainTabStack from './tabs/MainTabStack';
// import CollectionTabStack from './tabs/CollectionTabStack';
import MyLoadsTabStack from './tabs/MyLoadsTabStack';
import MyProfileTapStack from './tabs/MyProfileTapStack';
import SearchTabStack from './tabs/SearchTabStack';
import { useLocale } from '../hooks/useLocale';
import MyLoads from '../screens/MyLoadsTab/MyLoads';
import MyWallet from '../screens/MyProfileTab/MyProfile';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useThemeColor } from '../hooks/useThemeColor';
import GivingAnOffer from '../screens/mainTab/GivingAnOffer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import storeTapStack from './tabs/StoreTapStack';
import { MaterialIcons } from '@expo/vector-icons'; 
import { color } from 'react-native-reanimated';



const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  const getTabBarVisibility = (route: any) => {
    // const routeName = route.state
    //   ? route.state.routes[route.state.index].name
    //   : '';

    const routeName = getFocusedRouteNameFromRoute(route)

    if (routeName === 'MyWalletScreen') {
      return false;
    } else if (routeName === 'SevedLoctionsScreen') {
      return false;
    }

    return true;
  }



  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MainTab"
      tabBarOptions={{
         activeTintColor: useThemeColor({}, "green1"),
         style: {
          backgroundColor: 'white',//color you want to change
        }
          }}>

      <BottomTab.Screen
        name="MainTab"
        component={MainTabStack}

        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),

          tabBarIcon: ({ color, size }) => (<FontAwesome5 name="truck-loading" size={24} color={color} />),
          tabBarLabel: useLocale({}, "mainTabLabel"),
        })}

      />
 {/* <BottomTab.Screen
        name='store'
        component={storeTapStack}
        options={{
          tabBarIcon: ({ color, size }) => (<MaterialIcons name="storefront" size={30} color={color} />),
          tabBarLabel: useLocale({}, "store")
        }}


      /> */}

      <BottomTab.Screen
        name="MyLoads"
        component={MyLoadsTabStack}
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="md-list-circle-outline" size={35} color={color} />),
          tabBarLabel: useLocale({}, "MyLoadsTabLabel")
        }}


      />
      <BottomTab.Screen
        name="MyProfile"
        component={MyProfileTapStack}


        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),

          tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" size={30} color={color} />),
          tabBarLabel: useLocale({}, "SettingsLabel"),
        })}
      />


     


    </BottomTab.Navigator>
  );
}


