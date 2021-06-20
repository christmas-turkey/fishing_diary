import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_diary_notes } from '../redux/actions/DiaryActions';
import { fetch_goals } from '../redux/actions/GoalsActions';
import { DiaryNote } from './../components/DiaryNote';
import { Goal } from './../components/Goal';
import { DetailGoalModal } from './../components/DetailGoalModal';
import { navigate } from './../navigation/rootNavigation';
import { FontAwesome } from '@expo/vector-icons';
import { CustomRoundButton } from '../components/CustomRoundButton';

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
        {diaryNotes.map(data => {
          return (
            <DiaryNote 
              data={data}
              key={data.id}
              onPress={() => navigate('Detail diary note', data)} />
          )
        })}

        <CustomRoundButton 
          onPress={() => navigate('Add diary note')}
          text="Add note"
          icon={() => <FontAwesome color="#fff" name="plus" /> } />

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

        <CustomRoundButton 
          onPress={() => navigate('Add goal')}
          text="Add goal"
          icon={() => <FontAwesome color="#fff" name="plus" /> } />

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
    fontSize: 18,
    fontFamily: 'OpenSans-bold'
  },

})