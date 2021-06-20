import { Entypo, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const DiaryNote = ({data, onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={0.8} 
      style={styles.container}>
      
      <View style={styles.innerContainer}>
        <FontAwesome color="#fff" size={25} name='calendar-check-o' />
        <View style={{marginLeft: 10}}>
          <Text style={styles.label}>
            {data.label.slice(0, 30) + (data.label.length > 30 ? '...' : '')}
          </Text>
          <Text style={styles.text}>
            <Ionicons name="md-time" />{data.date}
          </Text>
          <Text style={styles.text}>
            <Entypo name="location-pin" />
            {data.location.slice(0, 30) + (data.location.length > 30 ? '...' : '')}
          </Text>
        </View>
      </View>

      <FontAwesome5 color='#fff' size={25} name="arrow-right" />
    </TouchableOpacity>
  )
}

DiaryNote.propTypes = {
  data: PropTypes.object,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#47597E',
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
    alignItems: 'center'
  },

  get label() {
    return {
      ...this.text,
      fontSize: 15,
      marginTop: 0,
      marginBottom: 10,
      fontWeight: 'bold'

    }
  },

  text: {
    color: '#fff',
    marginLeft: 10
  }
})

export { DiaryNote }