import { FontAwesome5, Entypo, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { goBack } from './../navigation/rootNavigation';
import { useDispatch } from 'react-redux';
import { remove_diary_note } from '../redux/actions/DiaryActions';


export const DetailDiaryNote = ({route}) => {

  const item = route.params
  const dispatch = useDispatch()

  const deleteNote = () => {
    dispatch(remove_diary_note(item))
    goBack()
  }

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.label}>{ item.label }</Text>
      <Text style={styles.text}>
        <FontAwesome5 size={15} name="weight" />  {item.weight } pounds
      </Text>
      <Text style={styles.text}>
        <Entypo size={15} name="location-pin" />  { item.location }
      </Text>
      <Text style={styles.text}>
        <FontAwesome size={15} name="calendar-check-o" />  { item.date }
      </Text>
      <Text style={styles.text}>Description: { item.description }</Text>
      
      <View style={{marginTop: 20}}>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => goBack()}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}><FontAwesome5 color="#fff" name="arrow-left" />  Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{...styles.btn, marginBottom: 60, backgroundColor: '#B50800'}}
          onPress={deleteNote}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}><FontAwesome5 color="#fff" name="times" />  Delete this note</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )

}

const styles = StyleSheet.create({
 container: {
   padding: 20,
   paddingTop: 40
 },

 btn: {
   width: '100%',
   height: 40,
   backgroundColor: '#293B5F',
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 20,
   marginTop: 20
 },

 text: {
   fontFamily: 'roboto-medium',
   marginTop: 30
 },

 label: {
   marginTop: 20,
   fontSize: 25
 }
})