import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Main = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your diary notes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  header: {
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'OpenSans-bold'
  }
})