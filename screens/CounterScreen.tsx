import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import CustomButton from '../components/CustomButton';

function CounterScreen({ navigation }: { navigation: any }) {
  const [count, setCount] = useState(0);

  function handleNextPress() {
    navigation.navigate('PersonalizedGreeting');
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.counterTextContainer}>
        <Text style={styles.counterText}>{count}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          style={styles.otherbuttonStyle}
          onButtonPress={() => setCount(count + 1)}
        >
          +
        </CustomButton>
        <CustomButton
          style={styles.otherbuttonStyle}
          onButtonPress={() => setCount(count - 1)}
        >
          -
        </CustomButton>
      </View>

      <View style={styles.nextButtonContainer}>
        <CustomButton
          style={styles.buttonStyle}
          onButtonPress={handleNextPress}
        >
          NEXT
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 3,
    backgroundColor: '#303F9F',
  },
  counterTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  counterText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 100,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  otherbuttonStyle: {
    alignSelf: 'center',
    width: '40%',
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

export default CounterScreen;
