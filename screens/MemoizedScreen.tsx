import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import React from 'react';
import { useState } from 'react';
import { Alert } from 'react-native';
import ChildComponent from '../components/ChildComponent';

const MemoizedChildComponent = React.memo(ChildComponent);

function MemoizedScreen() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [counterValue, setCounterValue] = useState(0);
  const [inputText, setInputText] = useState('');

  function handleNextClick() {
    navigation.navigate('CustomHook');
  }

  function handleSubmitClick() {
    if (inputValue.trim() === '') {
      Alert.alert('Please enter a value in the input field.');
      return;
    }
    setInputText(inputValue);
    setInputValue('');
  }

  function onDataChange(text: string) {
    setInputValue(text);
  }

  function handleCounterClick() {
    setCounterValue(prev => prev + 1);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          onChangeText={onDataChange}
          value={inputValue}
        />

        <MemoizedChildComponent
          text={`This is a memoized child component with new entered text \n${inputText}`}
        />

        <Text style={styles.text}>{counterValue}</Text>
      </View>

      <View style={styles.nextButtonContainer}>
        <CustomButton
          style={styles.buttonStyle}
          onButtonPress={handleSubmitClick}
        >
          SUBMIT TEXT
        </CustomButton>
      </View>

      <View style={styles.nextButtonContainer}>
        <CustomButton
          style={styles.buttonStyle}
          onButtonPress={handleCounterClick}
        >
          INCREASE COUNTER
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
    flex: 6,
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
    justifyContent: 'flex-start',
    flex: 1,
  },
  buttonStyle: {
    width: '90%',
    alignSelf: 'center',
  },
});
export default MemoizedScreen;
