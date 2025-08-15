import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import CustomButton from '../components/CustomButton';

function DarkModeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggleClick() {
    setIsDarkMode(prevMode => !prevMode);
  }
  return (
    <View
      style={[
        styles.rootContainer,
        { backgroundColor: isDarkMode ? '#303F9F' : '#FFFFFF' },
      ]}
    >
      <View style={styles.nextButtonContainer}>
        <CustomButton
          style={styles.buttonStyle}
          onButtonPress={handleToggleClick}
        >
          {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
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
export default DarkModeScreen;
