import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomRoundButton = ({text, icon, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props} 
      style={{...styles.default, ...props.style}} >
      <Text style={styles.text}>{icon()}  {text}</Text>
    </TouchableOpacity>
  )
}

CustomRoundButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.func
}

const styles = StyleSheet.create({
  default: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#44619D',
    marginTop: 10,
    height: 40,
    borderRadius: 15
  },

  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
}) 

export { CustomRoundButton }