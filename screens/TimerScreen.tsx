import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { useEffect, useState } from 'react';

function TimerScreen() {
  const navigation = useNavigation();

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleNextClick() {
    navigation.navigate('InputHandling');
  }
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        This component has been running for {'\n'}
        {'\n'}
        {time}s
      </Text>

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
  text: {
    color: 'white',
    fontSize: 30,
    marginHorizontal: 20,
    paddingTop: 60,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default TimerScreen;
