import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { remove_goal } from './../redux/actions/GoalsActions';
import PropTypes from 'prop-types';

const Goal = ({data, onPress}) => {
  
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      activeOpacity={0.8} 
      style={styles.rootContainer}
      onPress={onPress}>

      <View style={styles.innerContainer}>
        <FontAwesome color="#fff" size={25} name="check-square" />

        <View style={{marginLeft: 20}}>
          <Text style={styles.label}>
            {data.description.slice(0, 120) + (data.description.length > 120 ? '...' : '')}
          </Text>
            {Date.parse(data.date) - Date.now() > 0

              ? <Text style={styles.text}>
                <Ionicons name="md-time" /> {data.date}</Text>
              : <Text 
                  style={{...styles.text, color: '#B52B00'}}>
                  Overdue</Text> 
            }
        </View>

      </View>

      <TouchableOpacity onPress={() => dispatch(remove_goal(data))}>
        <FontAwesome5 color='#fff' size={25} name="times" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

Goal.propTypes = {
  data: PropTypes.object,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  rootContainer: {
    height: 150,
    backgroundColor: '#B2AB8C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
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
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'

  },

  text: {
    color: '#fff',
    marginTop: 10,
    fontFamily: 'roboto-medium'
  }
})

export { Goal }