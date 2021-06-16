import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Navbar } from './src/components/Navbar';
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './src/navigation/rootNavigation';
import { loadAsync } from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading'
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store/index';

const fetchFonts = () => {
  return loadAsync({
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'OpenSans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return <AppLoading startAsync={fetchFonts} onError={console.warn} onFinish={() => setFontsLoaded(true)}/>
  }

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navbar />
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}