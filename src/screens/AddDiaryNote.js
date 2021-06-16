import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { FontAwesome5 } from '@expo/vector-icons';
import { navigate } from './../navigation/rootNavigation';
import { useDispatch } from 'react-redux';
import { save_diary_note } from '../redux/actions/DiaryActions';
import { CustomTextInput } from './../components/CustomTextInput';
import { validateInputsData } from '../utils/validateInputsData';

export const AddDiaryNote = () => {

  const [date, setDate] = useState(new Date(Date.now()))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [label, setLabel] = useState('')
  const [weight, setWeight] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const onChangeDate = (event, selectedDate) => {
    const current_date = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(current_date)
  }

  const showMode = (currentMode) => {
    // Shows date picker

    setShow(true)
    setMode(currentMode)
  }

  const saveNote = () => {
    if (validateInputsData([label, weight, location, description])) {
      navigate('Diary')
      dispatch(save_diary_note({
        label: label,
        weight: weight,
        description: description,
        location: location,
        date: date.toLocaleDateString()
      }))
    }
  }

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>Add a diary note</Text>
      <View style={styles.inputField}>
        <CustomTextInput
          placeholder="Enter label"
          onChangeText={text => setLabel(text)} />
      </View>
      <View style={styles.inputField}>
        <CustomTextInput 
          placeholder="Enter weight"
          keyboardType="numeric"
          onChangeText={text => setWeight(text)} />
      </View>
      <View style={styles.inputField}>
        <CustomTextInput
          placeholder="Enter location"
          onChangeText={text => setLocation(text)} />
      </View>
      <View style={styles.inputField}>
        <CustomTextInput
           type="textarea"
           multiline={true}
           placeholder="Enter description"
           numberOfLines={10}
           onChangeText={text => setDescription(text)}/>
      </View>
      <View style={styles.inputField}>
        <FontAwesome5.Button
          name="calendar"
          backgroundColor="royalblue"
          onPress={() => showMode('date')}>
          Select date
        </FontAwesome5.Button>
         {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeDate} 
            />
          )}
      </View>
      <TouchableOpacity
         style={{...styles.submitBtn, backgroundColor: '#FF6841'}}
         onPress={() => navigate('Diary')}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
         style={{...styles.submitBtn, marginBottom: 40, backgroundColor: '#1EB200'}}
         onPress={saveNote}>
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
  container: {
    padding: 10,
  },

  submitBtn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'red',
    height: 40,
    borderRadius: 20
  },

  inputField: {
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
})