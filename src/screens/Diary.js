import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DiaryNote } from '../components/DiaryNote';
import { fetch_diary_notes } from '../redux/actions/DiaryActions';
import { navigate } from './../navigation/rootNavigation';

export const Diary = () => {
  
  const dispatch = useDispatch()
  const diaryNotes = useSelector(state => state.diaryNotes)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {

    dispatch(fetch_diary_notes())
    setDataLoaded(true)
  }

  return (
    <View style={styles.container}>
      <FlatList
      data={diaryNotes}
      keyExtractor={() => Math.round(Math.random() * 10000000).toString()}
      renderItem={({item}) => <DiaryNote item_data={item} />} />
      <TouchableOpacity style={styles.button} onPress={() => navigate('Add diary note')}>
        <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#47597E',
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 40,
    width: 60,
    height: 60
  }
})