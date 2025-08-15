import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { GREETING_DATA } from '../data/dummy-data';
import GreetingCard from '../components/GreetingCard';

function ResponsiveCardGridScreen() {
  const navigation = useNavigation();

  function handleNextClick() {
    navigation.navigate('Memoized');
  }

  const renderItem = ({
    item,
  }: {
    item: { message: string; name: string };
  }) => (
    <View style={styles.cardContainer}>
      <GreetingCard message={item.message} name={item.name} />
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={GREETING_DATA}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
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
    backgroundColor: '#303F9F',
  },
  listContainer: {
    flex: 5,
  },
  nextButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    paddingHorizontal: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    margin: 8,
  },
  buttonStyle: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default ResponsiveCardGridScreen;
