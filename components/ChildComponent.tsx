import { Text, View, StyleSheet } from 'react-native';

type ChildProps = {
  text: string;
};

function ChildComponent({ text }: ChildProps) {
  console.log('Child rendered');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginHorizontal: 20,
    paddingTop: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChildComponent;
