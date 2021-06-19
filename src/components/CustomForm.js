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
        activeOpacity={0.8}
        style={{...styles.btn, backgroundColor: '#293B5F'}}
        onPress={props.onCancel} >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8} 
        style={{...styles.btn,
                marginBottom: 40,
                backgroundColor: '#00A900' }}
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

  btn: {
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