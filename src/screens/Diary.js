import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DiaryNote } from '../components/DiaryNote';
import { fetch_diary_notes } from '../redux/actions/DiaryActions';
import { navigate } from './../navigation/rootNavigation';
import { RoundCornerButton } from './../components/RoundCornerButton';

export const Diary = () => {
  
  const dispatch = useDispatch()
  const diaryNotes = useSelector(state => state.storageItems.diaryNotes)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {

    dispatch(fetch_diary_notes())
    setDataLoaded(true)
  }

  return (
    <View style={styles.container}>
      <FlatList
      data={diaryNotes}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
       return (
        <DiaryNote
          onPress={() => navigate('Detail diary note', item)}
          data={item} />
       )
      }} />
      <RoundCornerButton text="+" onPress={() => navigate('Add diary note')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})