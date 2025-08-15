import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';

function InputHandlingScreen() {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState(false);
  const [inputText, setInputText] = useState('');

  function handleNextClick() {
    navigation.navigate('TodoList');
  }

  function handleSubmitClick() {
    if (inputValue.trim() === '') {
      Alert.alert('Please enter a value in the input field.');
      return;
    }
    setShowText(true);
    setInputText(inputValue);
    setInputValue('');
  }

  function onDataChange(text: string) {
    setShowText(false);
    setInputValue(text);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          onChangeText={onDataChange}
          value={inputValue}
        />

        {showText && <Text style={styles.text}>"Hello, {inputText}!"</Text>}
      </View>

      <View style={styles.nextButtonContainer}>
        <CustomButton
          style={styles.buttonStyle}
          onButtonPress={handleSubmitClick}
        >
          SUBMIT
        </CustomButton>
      </View>

      <View style={styles.nextButtonContainer}>
        <CustomButton
          style={styles.buttonStyle}
          onButtonPress={handleNextClick}
        >
          NEXT
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#303F9F',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginHorizontal: 20,
    paddingTop: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputText: {
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#3F51B5',
    borderRadius: 10,
    padding: 10,
    fontSize: 30,
    width: '90%',
    marginTop: 60,
    alignSelf: 'center',
    color: 'white',
  },
  nextButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  buttonStyle: {
    width: '90%',
    alignSelf: 'center',
  },
});
export default InputHandlingScreen;
