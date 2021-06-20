import { FontAwesome5, Entypo, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { goBack } from './../navigation/rootNavigation';
import { useDispatch } from 'react-redux';
import { remove_diary_note } from '../redux/actions/DiaryActions';
import { CustomRoundButton } from '../components/CustomRoundButton';


export const DetailDiaryNote = ({route}) => {

  const item = route.params
  const dispatch = useDispatch()

  const ICONS_SIZE = 15

  const deleteNote = () => {
    dispatch(remove_diary_note(item))
    goBack()
  }

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.label}>{ item.label }</Text>
      <Text style={styles.text}>
        <Entypo size={ICONS_SIZE} name="location-pin" />  { item.location }
      </Text>
      <Text style={styles.text}>
        <FontAwesome size={ICONS_SIZE} name="calendar-check-o" />  { item.date }
      </Text>
      <Text style={styles.text}>Опис: { item.description }</Text>
      
      <View style={{marginTop: 40}}>
        <CustomRoundButton
         text="Назад"
         icon={() => <FontAwesome5 color="#fff" name="arrow-left" />}
         onPress={goBack} />

        <CustomRoundButton
         text="Видалити запис"
         style={{marginBottom: 60, backgroundColor: '#B50800'}}
         icon={() => <FontAwesome5 color="#fff" name="times" />}
         onPress={deleteNote} />

      </View>

    </ScrollView>
  )

}

const styles = StyleSheet.create({
 container: {
   padding: 20,
   paddingTop: 40
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