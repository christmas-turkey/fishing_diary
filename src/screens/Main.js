import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_diary_notes } from '../redux/actions/DiaryActions';
import { fetch_goals } from '../redux/actions/GoalsActions';
import { DiaryNote } from './../components/DiaryNote';
import { Goal } from './../components/Goal';
import { DetailGoalModal } from './../components/DetailGoalModal';
import { navigate } from './../navigation/rootNavigation';
import { FontAwesome } from '@expo/vector-icons';

export const Main = () => {

  const dispatch = useDispatch()
  const goals = useSelector(state => state.storageItems.goals).slice(0, 4)
  const diaryNotes = useSelector(state => state.storageItems.diaryNotes).slice(0, 4)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [detailGoalModalVisible, setDetailGoalModalVisible] = useState(false)
  const [detailGoalModalData, setDetailGoalModalData] = useState({})

  if (!dataLoaded) {

    dispatch(fetch_goals())
    dispatch(fetch_diary_notes())
    setDataLoaded(true)
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>Your last notes</Text>
        {diaryNotes.map(note => {
          return (
            <DiaryNote 
              data={note}
              key={note.id}
              onPress={() => navigate('Detail diary note', note)} />
          )
        })}

        <TouchableOpacity 
          onPress={() => navigate('Add diary note')}
          activeOpacity={0.8} 
          style={styles.btn}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}><FontAwesome color="#fff" name="plus" />  Add note</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={styles.header}>Your last goals</Text>
        {goals.map(goal => {
          return (
            <Goal 
              data={goal} 
              onPress={() => {
                setDetailGoalModalData(goal)
                setDetailGoalModalVisible(true)
              }} 
              key={goal.id} />
          )
        })}

        <TouchableOpacity 
          activeOpacity={0.8} 
          style={styles.btn}
          onPress={() => navigate('Add goal')}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}><FontAwesome color="#fff" name="plus" />  Add goal</Text>
        </TouchableOpacity>

        <DetailGoalModal 
          onClose={() => setDetailGoalModalVisible(false)}
          data={detailGoalModalData}
          isVisible={detailGoalModalVisible} />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  header: {
    margin: 20,
    fontSize: 25,
    fontFamily: 'OpenSans-bold'
  },
  
  btn: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#44619D',
    marginTop: 20,
    height: 40,
    borderRadius: 15
  },

})