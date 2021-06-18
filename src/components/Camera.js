import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import Modal from 'react-native-modal';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { save_photo } from '../redux/actions/PhotosActions';

export const Camera = props => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);
  const dispatch = useDispatch()

  const cameraRef = useRef()

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const takePhoto = async () => {
    const options = {quality: 1}
    let photo = await cameraRef.current.takePictureAsync(options)

    dispatch(save_photo({
      id: (Date.now() * Math.random()).toString(),
      uri: photo.uri
    }))
   }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    onClose()
  }
  

  return (
    <Modal
     style={styles.container}
     isVisible={props.isVisible}>
      <ExpoCamera ref={cameraRef} style={styles.camera} type={type}>

          <TouchableOpacity
            onPress={props.onClose}
            style={{position: 'absolute', top: 20, left: 20}}>

            <AntDesign size={50} name="arrowleft" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{position: 'absolute', bottom: 20, left: 20}}
            onPress={() => {
              setType(
                type === ExpoCamera.Constants.Type.back
                  ? ExpoCamera.Constants.Type.front
                  : ExpoCamera.Constants.Type.back
              );
            }}>
              
            <Ionicons size={60} name="camera-reverse" />
          </TouchableOpacity>

        <TouchableOpacity
            style={styles.snapButton}
            onPress={takePhoto}>
        </TouchableOpacity>
      </ExpoCamera>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  camera: {
    flex: 1,
  },

  snapButton: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: 'gray',
    borderColor: '#CCCCCC',
    borderStyle: 'solid',
    borderWidth: 5,
    position: 'absolute',
    bottom: 20,
    left: (Dimensions.get('window').width / 2) - 40
  },
});