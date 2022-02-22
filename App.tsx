import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/Navigation';
import { ScreenContext } from './contexts/ScreenContext';
import AppContent from './components/containers/AppContent';
import appConetentRef from './references/appContentRef';
import { getMyProfileService } from './services/apiCalls/getMyProfileService';


import { Provider } from 'react-redux';
import {store} from './state/index'


// const initialState={
//   1:{
//     empid:1,
//     empName:'Employee One' , 
//     empSalary:10000
//   },
//   // 2:{
//   //   empid:2,
//   //   empName:'Employee Tow' , 
//   //   empSalary:20000
//   // }
// }






export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('Auth');

  const signIn = async () => {
    let profile = await getMyProfileService();
    console.log(profile);
    if(profile == null)
    {
      setCurrentScreen("Auth");
    }
    // else if (profile.data == null) {
    //   setCurrentScreen("Profile");
    // }
    else {
      setCurrentScreen("Main")
    }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>  
        <ScreenContext.Provider value={{ currentScreen, setCurrentScreen }} >
          <AppContent
            ref={appConetentRef}
            signIn={signIn}
            signOut={() => setCurrentScreen("Auth")}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </AppContent>
        </ScreenContext.Provider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}