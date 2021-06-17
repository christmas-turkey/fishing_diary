import { Alert } from 'react-native';

export const validateInputsData = (inputsData) => {

  for (let input of inputsData) {
    if (!input.trim()) {
      Alert.alert('All fields must be filled')
      return false
    }
  
  }

  return true

}