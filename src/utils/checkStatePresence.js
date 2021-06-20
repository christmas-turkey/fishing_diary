import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const checkStatePresence = (data, no_data_message) => {
  
  if (!data.length) {
    return (
      <Text style={styles.text}>
        <MaterialCommunityIcons color="gray" size={25} name="folder-download" />  {no_data_message}
      </Text>
    )
  }

}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: '40%',
    fontSize: 20,
    color: 'gray',
    fontFamily: 'roboto-medium',
    alignSelf: 'center',
  }
})
