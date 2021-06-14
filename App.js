import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Navbar } from './src/components/Navbar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Main } from './src/screens/Main';
import { Photos } from './src/screens/Photos';
import { Goals } from './src/screens/Goals';
import { navigationRef } from './src/screens/rootNavigation';
import { loadAsync } from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading'
import { FontAwesome5 } from '@expo/vector-icons';
import { Diary } from './src/screens/Diary';
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf'

const Drawer = createDrawerNavigator()

const fetchFonts = () => {
  return loadAsync({
    'roboto-medium': RobotoMedium
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return <AppLoading startAsync={fetchFonts} onError={console.warn} onFinish={() => setFontsLoaded(true)}/>
  }

  const getScreenOptions = (title, iconName) => {
    return {
      title: title,
      drawerIcon: ({size}) => (
        <FontAwesome5
           name={iconName}
           size={size}
           color={'#000'}
        />
     )
    }
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Navbar />
      <Drawer.Navigator initialRouteName="Main">

        <Drawer.Screen name="Main" component={Main} options={getScreenOptions('Main', 'home')}/>
        
        <Drawer.Screen name="Diary" component={Diary} options={getScreenOptions('Diary', 'calendar-plus')} />
        <Drawer.Screen name="Photos" component={Photos} options={getScreenOptions('Photos', 'image')} />
        <Drawer.Screen name="Fishing goals" component={Goals} options={getScreenOptions('Goals', 'bullseye')} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}