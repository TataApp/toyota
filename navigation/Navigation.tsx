import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './RootNavigator';
import MainNavigation from './MainNavigation';
import { ScreenContext } from '../contexts/ScreenContext';
import { useContext } from 'react';
import AuthNavigation from './AuthNavigation';
import ProfileNavigation from './ProfileNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from '../screens/settings/DrawerContent';
import FlashMessage from 'react-native-flash-message';


const Drawer = createDrawerNavigator();
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const screenContext = useContext(ScreenContext);


  if (screenContext.currentScreen == "Auth") {
    return (
      <NavigationContainer

        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator childComponent={AuthNavigation} />
        <FlashMessage
        position="top"
        />


      </NavigationContainer>
    );
  }
  else if (screenContext.currentScreen == "Main") {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <RootNavigator childComponent={MainNavigation} /> */}

        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
          <Drawer.Screen name="Home" component={MainNavigation} />
          <Drawer.Screen name="AdressScreen" component={ProfileNavigation} />
        </Drawer.Navigator>
        <FlashMessage
        position="top"
        />
      </NavigationContainer>
    );
  }
  else if (screenContext.currentScreen == "Profile") {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator childComponent={ProfileNavigation} />
        
        {/* <Drawer.Navigator initialRouteName="Profile" drawerContent={props => <DrawerContent {...props} />} >
          <Drawer.Screen name="Home" component={MainNavigation} />
          <Drawer.Screen name="ProfileNavigation" component={ProfileNavigation} />
        </Drawer.Navigator> */}
<FlashMessage
        position="top"
        />

      </NavigationContainer>
    );
  }
  else {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator childComponent={AuthNavigation} />

      </NavigationContainer>
    );
  }

}

