import { Entypo, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const DiaryNote = ({item_data}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.informationGroup}>
        <FontAwesome color="#fff" size={25} name='calendar-check-o' />
        <View style={{marginLeft: 10}}>
          <Text style={styles.label}>{item_data.label}</Text>
          <Text style={styles.weight}><Ionicons name="md-time" /> {item_data.date}</Text>
          <Text style={styles.location}><Entypo name="location-pin" /> {item_data.location}</Text>
        </View>
      </View>
      <FontAwesome5 color='#fff' size={25} name="arrow-right" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 20,
  },

  informationGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  label: {
    fontSize: 15,
    margin: 10,
    marginTop: 0,
    color: '#fff',
    fontWeight: 'bold'
  },

  weight: {
    color: '#fff',
    marginLeft: 10,
  },
  location: {
    color: '#fff',
    marginLeft: 10
  }
})