import React from 'react';
import { useState } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { FontAwesome5 } from '@expo/vector-icons';
import { navigate } from './../navigation/rootNavigation';
import { useDispatch } from 'react-redux';
import { save_goal } from '../redux/actions/GoalsActions';
import { CustomTextInput } from './../components/CustomTextInput';
import { validateInputsData } from '../utils/validateInputsData';
import { CustomForm } from '../components/CustomForm';

export const AddGoal = () => {

  const [date, setDate] = useState(new Date(Date.now()))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
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

  const saveGoal = () => {
    if (validateInputsData([description])) {
      navigate('Fishing goals')
      dispatch(save_goal({
        description: description,
        date: date.toLocaleDateString()
      }))
    }
  }

  return (

    <CustomForm 
      header="Add a goal"
      onCancel={() => navigate('Fishing goals')}
      onSubmit={saveGoal}>

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
