import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native'
import Modal from 'react-native-modal'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';


const DetailGoalModal = ({isVisible, data, onClose}) => {
  return (
    <Modal
      style={styles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={isVisible}>
      
      <View style={styles.modalContent}>

        <TouchableOpacity onPress={onClose}>
          <FontAwesome5 color='gray' size={25} name="times" />
        </TouchableOpacity>

        <ScrollView style={{marginTop: 30}}>
          <Text style={styles.modalText}><Ionicons name="md-time" /> {data.date}</Text>
          <Text style={styles.modalText}>{data.description}</Text>
        </ScrollView>
      </View>

    </Modal>
  )
}

DetailGoalModal.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object
}

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    height: '70%',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 20
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalText: {
    fontFamily: 'roboto-medium',
    marginBottom: 20
  }
})

export { DetailGoalModal }