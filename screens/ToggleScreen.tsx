import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { Timer } from '../utils/Constants';

function ToggleScreen() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  function handleNextClick() {
    navigation.navigate(Timer);
  }

  function handleVisibilityButtonClick() {
    setIsVisible(!isVisible);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
        {isVisible && (
          <Text style={styles.text}>
            You really want to see this text? It can be toggled on and off!
          </Text>
        )}
      </View>

      <View style={styles.nextButtonContainer}>
        <CustomButton
          style={styles.buttonStyle}
          onButtonPress={handleVisibilityButtonClick}
        >
          {isVisible ? 'Hide Details' : 'Show Details'}
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
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
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

export default ToggleScreen;
