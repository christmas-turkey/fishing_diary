import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RoundCornerButton } from '../components/RoundCornerButton';
import { fetch_goals } from '../redux/actions/GoalsActions';
import { navigate } from './../navigation/rootNavigation';
import { Goal } from './../components/Goal';
import { DetailGoalModal } from '../components/DetailGoalModal';
import { checkStatePresence } from './../utils/checkStatePresence';

export const Goals = () => {
  
  const dispatch = useDispatch()
  const goals = useSelector(state => state.storageItems.goals)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [detailGoalModalVisible, setDetailGoalModalVisible] = useState(false)
  const [detailGoalModalData, setDetailGoalModalData] = useState({})

  if (!dataLoaded) {

    dispatch(fetch_goals())
    setDataLoaded(true)
  }

  return (
    <View style={styles.container}>
      {checkStatePresence(goals, 'Ви не додали цілей!')}
      <FlatList
        data={goals}
        keyExtractor={item => item.id}
        renderItem={({item}) => {

        return (
          <Goal 
            data={item}
            onPress={() => {
              setDetailGoalModalData(item)
              setDetailGoalModalVisible(true)
            }} 
             />
        )

      }} />
      <RoundCornerButton text="+" onPress={() => navigate('Add goal')} />
      <DetailGoalModal 
        onClose={() => setDetailGoalModalVisible(false)}
        data={detailGoalModalData}
        isVisible={detailGoalModalVisible} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})