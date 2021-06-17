import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RoundCornerButton } from '../components/RoundCornerButton';
import { fetch_goals } from '../redux/actions/GoalsActions';
import { navigate } from './../navigation/rootNavigation';
import { Goal } from './../components/Goal';
import { CustomFlatList } from '../components/CustomFlatList';

export const Goals = () => {
  
  const dispatch = useDispatch()
  const goals = useSelector(state => state.storageItems.goals)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {

    dispatch(fetch_goals())
    setDataLoaded(true)
  }

  return (
    <View style={styles.container}>
      <CustomFlatList
      refreshEvent={() => dispatch(fetch_goals())}
      data={goals}
      keyExtractor={() => Math.round(Math.random() * 10000000).toString()}
      renderItem={({item}) => <Goal item_data={item} />} />
      <RoundCornerButton text="+" onPress={() => navigate('Add goal')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})