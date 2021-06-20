import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RoundCornerButton } from '../components/RoundCornerButton';
import { fetch_photos, remove_photo, save_photo } from '../redux/actions/PhotosActions';
import Modal from 'react-native-modal'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker'
import { Camera } from './../components/Camera';
import PropTypes from 'prop-types'
import { checkStatePresence } from './../utils/checkStatePresence';

const FullPhoto = props => {

  return (
    <Modal
      style={styles.fullPhoto}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={props.isVisible}>
      
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.onClose}
        style={{width: '100%', height: '100%'}}>
        
        <Image resizeMode='contain' style={{flex: 1}} source={{uri: props.uri}} />
      
      </TouchableOpacity>
    </Modal>
  )
}

FullPhoto.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  uri: PropTypes.string
}

export const Photos = () => {

  const [bottomModalOpened, setBottomModalOpened] = useState(false)
  const [isCameraVisible, setCameraVisible] = useState(false)
  const [fullPhotoURI, setFullPhotoURI] = useState('')
  const [fullPhotoVisible, setFullPhotoVisible] = useState(false)
  
  const dispatch = useDispatch()
  const photos = useSelector(state => state.storageItems.photos)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {

    dispatch(fetch_photos())
    setDataLoaded(true)
  }

  const pickFile = async () => {
    const local_image = await DocumentPicker.getDocumentAsync({
      type: 'image/*'
    })

    if (local_image.uri) {
      dispatch(save_photo({
        id: (Date.now() * Math.random()).toString(),
        uri: local_image.uri
      }))
    }
    
  }

  return (
    <View style={styles.container}>
      
      {checkStatePresence(photos, 'There are no photos yet!')}

      <FlatList
      data={photos}
      keyExtractor={item => item.id}
      renderItem={({item}) =>  {

        return (
          <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.photoContainer}
            onPress={() => {
              setFullPhotoURI(item.uri)
              setFullPhotoVisible(true)
            }}
          >

            <Image style={styles.photo} source={{uri: item.uri}} />
            
            <TouchableOpacity
              style={styles.removePhoto}
              onPress={() => dispatch(remove_photo(item))}>
              <FontAwesome5 color='#fff' size={25} name="times" />
            </TouchableOpacity>
          
          </TouchableOpacity>
        )

      }} />
      <RoundCornerButton text="+" onPress={() => setBottomModalOpened(true)} />

      <Modal
        style={styles.bottomModal} 
        isVisible={bottomModalOpened}
        onBackdropPress={() => setBottomModalOpened(false)}>

        <View style={styles.bottomModalContent}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setCameraVisible(true)}>

            <MaterialIcons size={18} name='add-a-photo' />
            <Text>  Make photo</Text>

          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.modalButton} 
            onPress={pickFile}>

            <MaterialIcons size={18} name='add-photo-alternate' /> 
            <Text>  Load from gallery</Text>

          </TouchableOpacity>
        </View>

      </Modal>
      <FullPhoto
        isVisible={fullPhotoVisible} 
        onClose={() => setFullPhotoVisible(false)}
        uri={fullPhotoURI} />

      <Camera 
        onClose={() => setCameraVisible(false)}
        isVisible={isCameraVisible} />
       
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  fullPhoto: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  },

  photoContainer: {
    height: 300,
    width: '90%',
    margin: 15
  },

  photo: {
    flex: 1,
    borderRadius: 20
  },

  removePhoto: {
    position: 'absolute', 
    top: 20,
    right: 20
  },

  modalButton: {
    padding: 20,
    flexDirection: 'row'
  },

  bottomModalContent: {
    backgroundColor: '#D2D2D2'
  }
})