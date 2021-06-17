import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const RoundCornerButton = ({text, ...props}) => {

  return (
    <TouchableOpacity {...props} style={{...styles.main, ...props.style}}>
      <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#962D2D',
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 40,
    width: 60,
    height: 60
  }
})