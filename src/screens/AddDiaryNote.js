import React from 'react';
import { useState } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { FontAwesome5 } from '@expo/vector-icons';
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
    </CustomForm>
  )
}
