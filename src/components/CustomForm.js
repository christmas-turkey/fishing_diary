import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { CustomRoundButton } from './CustomRoundButton';

const CustomForm = ({onSubmit, header, onCancel, ...props}) => {

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>{header}</Text>
      {props.children.map((value, index) => {
        return (
          <View style={styles.inputField} key={index+1}>
            {value}
          </View>
        )
      })}

      <CustomRoundButton 
          style={{backgroundColor: '#293B5F'}}
          onPress={onCancel}
          text="Назад"
          icon={() => <FontAwesome5 color="#fff" name="arrow-left" />} />
      
      <CustomRoundButton 
          style={{marginBottom: 40, backgroundColor: '#00A900'}}
          onPress={onSubmit}
          text="Зберегти"
          icon={() => <FontAwesome5 color="#fff" name="check" />} />

    </ScrollView>
  )
}

CustomForm.propTypes = {
  header: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontFamily: 'OpenSans-bold',
    margin: 20
  },

  container: {
    padding: 10,
  },

  inputField: {
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
})

export { CustomForm }