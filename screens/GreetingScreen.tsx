import { View, StyleSheet, ScrollView } from 'react-native';
import { GREETING_DATA } from '../data/dummy-data';
import GreetingCard from '../components/GreetingCard';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

function GreetingScreen() {
  const navigation = useNavigation();

  function handleNextClick() {
    navigation.navigate('Toggle');
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <ScrollView>
          {GREETING_DATA.map((greeting, index) => (
            <View key={index}>
              <GreetingCard {...greeting} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.nextButtonContainer}>
        <CustomButton style={styles.button} onButtonPress={handleNextClick}>
          Next
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    padding: 16,
    backgroundColor: '#303F9F',
  },
  listContainer: {
    flex: 7,
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

export default GreetingScreen;
