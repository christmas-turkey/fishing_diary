import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { openDrawer } from '../screens/rootNavigation';

export const Navbar = () => {
  
  return (
    <View style={styles.navbar_container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={openDrawer}>
          <FontAwesome5 style={styles.bars} name="bars" />
        </TouchableOpacity>
        <Text style={styles.logo}><FontAwesome5 style={styles.logo} name="fish" />  Fishing diary</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: 30,
    fontSize: 25,
    color: '#fff',
    fontFamily: 'roboto-medium'
  },
  bars: {
    fontSize: 30,
    color: '#fff'
  },
  navbar_container: {
    paddingLeft: 20,
    height: 150,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#293B5F'
  }
})