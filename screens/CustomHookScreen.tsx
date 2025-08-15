import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import useFetch from '../hooks/useFetch.hook';
import GreetingCard from '../components/GreetingCard';

type User = {
  id: number;
  name: string;
  email: string;
};

function CustomHookScreen() {
  const navigation = useNavigation();
  const {
    loading,
    data: users,
    error,
  } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  function handleNextClick() {
    navigation.navigate('DarkMode');
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.listContainer}>
        {loading && <Text style={styles.loadingText}>Loading...</Text>}
        {error && <Text style={styles.errorText}>Error: {error}</Text>}
        {users && (
          <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <GreetingCard name={item.name} message={item.email} />
            )}
          />
        )}
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
  listContainer: {
    flex: 5,
    padding: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  loadingText: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 20,
    fontSize: 16,
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

export default CustomHookScreen;
