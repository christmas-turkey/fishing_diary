import { Entypo, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Goal = ({item_data}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <FontAwesome color="#fff" size={25} name="check-square" />
        <View style={{marginLeft: 10}}>
          <Text style={styles.label}>
            {item_data.description.slice(0, 120) + (item_data.description.length > 120 ? '...' : '')}
          </Text>
        </View>
      </View>
      <FontAwesome5 color='#fff' size={25} name="times" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    height: 130,
    backgroundColor: '#B2AB8C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 20,
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%'
  },

  label: {
    fontSize: 15,
    margin: 10,
    marginTop: 0,
    color: '#fff',
    fontWeight: 'bold'
  },
})