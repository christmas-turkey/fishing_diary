import React from 'react';
import { useState } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { FontAwesome } from '@expo/vector-icons';
import { goBack } from './../navigation/rootNavigation';
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
  const [datePlaceholder, setDatePlaceholder] = useState('Choose due date')

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

  const saveGoal = () => {
    if (validateInputsData([description])) {
      goBack()
      dispatch(save_goal({
        id: (Date.now() * Math.random()).toString(),
        description: description,
        date: date.toLocaleDateString()
      }))
    }
  }

  return (

    <CustomForm 
      header="Add a goal"
      onCancel={() => goBack()}
      onSubmit={saveGoal}>

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
