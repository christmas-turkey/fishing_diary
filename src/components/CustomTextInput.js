import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CustomTextInput = ({type='textinput', ...props}) => {

  let stylesToApply = null

  if (type === 'textarea') {

    stylesToApply = styles.textarea

  } else if (type === 'textinput') {
    stylesToApply = styles.text_input
  }

  return (
    <TextInput style={stylesToApply} {...props} />
  )
}

CustomTextInput.propTypes = {
  type: PropTypes.string
}

const styles = StyleSheet.create({

  text_input: {
    padding: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#D4DEE6',
    borderRadius: 10
  },

  get textarea() {
    return {
      ...this.text_input,
      textAlignVertical: 'top',
      height: 200
    }
  }

})

export { CustomTextInput }