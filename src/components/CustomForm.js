import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export const CustomForm = props => {

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>{props.header}</Text>
      {props.children.map((value, index) => {
        return (
          <View style={styles.inputField} key={index+1}>
            {value}
          </View>
        )
      })}
      <TouchableOpacity
        style={{...styles.roundButton, backgroundColor: 'red'}}
        onPress={props.onCancel} >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{...styles.roundButton,
                marginBottom: 40,
                backgroundColor: 'green' }}
        onPress={props.onSubmit} >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontFamily: 'OpenSans-bold',
    margin: 20
  },

  roundButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 40,
    borderRadius: 20
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