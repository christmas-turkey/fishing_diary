import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native'
import Modal from 'react-native-modal'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';


export const DetailGoalModal = props => {
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
          <Text style={styles.modalText}><Ionicons name="md-time" /> {props.data.date}</Text>
          <Text style={styles.modalText}>{props.data.description}</Text>
        </ScrollView>
      </View>

    </Modal>
  )
} 

const styles = StyleSheet.create({
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
  },

  modalText: {
    fontFamily: 'roboto-medium',
    marginBottom: 20
  }
})