import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RoundCornerButton } from '../components/RoundCornerButton';
import { fetch_goals } from '../redux/actions/GoalsActions';
import { navigate } from './../navigation/rootNavigation';
import { Goal } from './../components/Goal';
import { CustomFlatList } from '../components/CustomFlatList';
import Modal from 'react-native-modal';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const DetailGoalModal = props => {
  return (
    <Modal
      style={styles.detailGoalModal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={props.isVisible}>
      
      <View style={styles.detailGoalContent}>

        <TouchableOpacity onPress={props.onClose}>
          <FontAwesome5 color='gray' size={25} name="times" />
        </TouchableOpacity>

        <ScrollView style={{marginTop: 30}}>
          <Text style={{marginBottom: 20}}><Ionicons name="md-time" /> {props.data.date}</Text>
          <Text>{props.data.description}</Text>
        </ScrollView>
      </View>

    </Modal>
  )
} 

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
      <CustomFlatList
      refreshEvent={() => dispatch(fetch_goals())}
      data={goals}
      keyExtractor={item => item.id}
      renderItem={({item}) => {

        return (
          <Goal 
            item_data={item} 
            onPress={() => {
              setDetailGoalModalData(item)
              setDetailGoalModalVisible(true)
            }} />
        )

      }} />
      <RoundCornerButton text="+" onPress={() => navigate('Add goal')} />
      <DetailGoalModal onClose={() => setDetailGoalModalVisible(false)} data={detailGoalModalData} isVisible={detailGoalModalVisible} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  detailGoalContent: {
    width: '100%',
    height: '70%',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 20
  },

  detailGoalModal: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})