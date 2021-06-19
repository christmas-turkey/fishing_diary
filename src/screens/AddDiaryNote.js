import React from 'react';
import { useState } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { FontAwesome } from '@expo/vector-icons';
import { navigate } from './../navigation/rootNavigation';
import { useDispatch } from 'react-redux';
import { save_diary_note } from '../redux/actions/DiaryActions';
import { CustomTextInput } from './../components/CustomTextInput';
import { validateInputsData } from '../utils/validateInputsData';
import { CustomForm } from '../components/CustomForm';

export const AddDiaryNote = () => {

  const [date, setDate] = useState(new Date(Date.now()))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [label, setLabel] = useState('')
  const [weight, setWeight] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [datePlaceholder, setDatePlaceholder] = useState('Choose date') 

  const dispatch = useDispatch()

  const onChangeDate = (event, selectedDate) => {
    const current_date = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(current_date)
    setDatePlaceholder(current_date.toLocaleDateString())
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
        id: (Date.now() * Math.random()).toString(),
        label: label,
        weight: weight,
        description: description,
        location: location,
        date: date.toLocaleDateString()
      }))
    }
  }

  return (
    <CustomForm 
      header="Add diary note"
      onCancel={() => navigate('Diary')}
      onSubmit={saveNote}>

      <CustomTextInput
        placeholder="Enter label"
        maxLength={100}
        onChangeText={text => setLabel(text)} />         
      <CustomTextInput 
        placeholder="Enter weight"
        maxLength={40}
        keyboardType="numeric"
        onChangeText={text => setWeight(text)} />
      <CustomTextInput
        placeholder="Enter location"
        maxLength={50}
        onChangeText={text => setLocation(text)} />
      <CustomTextInput
          type="textarea"
          multiline={true}
          maxLength={1500}
          placeholder="Enter description"
          numberOfLines={10}
          onChangeText={text => setDescription(text)}/>
      
        <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.dateButton}
          onPress={() => showMode('date')}>
          
          <FontAwesome color="#fff" name="calendar-check-o" />  
          <Text style={{color: '#fff', fontWeight: 'bold'}}>  {datePlaceholder}</Text>
        </TouchableOpacity>
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
    </CustomForm>
  )
}

const styles = StyleSheet.create({
  dateButton: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#47597E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  }
})
