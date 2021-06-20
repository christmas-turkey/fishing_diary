import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const RoundCornerButton = ({text, ...props}) => {

  return (
    <TouchableOpacity 
       activeOpacity={0.8}
       {...props}
       style={{...styles.default, ...props.style}}>

      <Text style={styles.text}>{text}</Text>
    
    </TouchableOpacity>
  )
}

RoundCornerButton.propTypes = {
  text: PropTypes.string
}

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#293B5F',
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 40,
    width: 60,
    height: 60
  },

  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  }
})

export { RoundCornerButton }