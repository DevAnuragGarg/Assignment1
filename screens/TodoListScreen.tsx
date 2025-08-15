import {
  TextInput,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import GreetingCard from '../components/GreetingCard';

function TodoListScreen() {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState('');
  const [inputValues, setInputValues] = useState<string[]>([]);

  function handleNextClick() {
    navigation.navigate('ResponsiveCardGrid');
  }

  function handleSubmitClick() {
    if (inputValue.trim() === '') {
      Alert.alert('Please enter a value in the input field.');
      return;
    }
    setInputValues(prev => [...prev, inputValue]);
    setInputValue('');
  }

  function onDataChange(text: string) {
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
      </View>
      <View style={styles.listContainer}>
        <ScrollView style={styles.scrollView}>
          {inputValues.map((value, index) => (
            <GreetingCard
              key={index}
              message={value}
              buttonText="Delete"
              name={`User ${index + 1}`}
              onButtonPress={() => {
                setInputValues(prev => prev.filter((_, i) => i !== index));
              }}
            />
          ))}
        </ScrollView>
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
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1,
  },
  listContainer: {
    flex: 5,
    width: '100%',
    padding: 16,
  },
  scrollView: {
    width: '100%',
  },
  inputText: {
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#3F51B5',
    borderRadius: 10,
    padding: 10,
    fontSize: 30,
    width: '90%',
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

export default TodoListScreen;
