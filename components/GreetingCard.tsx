import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

type GreetingCardProps = {
  name: string;
  message: string;
  buttonText?: string;
  onButtonPress?: () => void;
  style?: object;
};

function GreetingCard({
  name,
  message,
  buttonText,
  onButtonPress,
  style,
}: GreetingCardProps) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>Hello, {name}!,</Text>
      <Text style={styles.subtitle}>Your message is: {message}</Text>
      {buttonText && (
        <CustomButton
          style={styles.button}
          onButtonPress={onButtonPress ?? (() => {})}
        >
          {buttonText}
        </CustomButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 4,
    backgroundColor: '#dfe3fdff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 8,
  },
  button: {
    marginTop: 16,
  },
  title: {
    color: '#303F9F ',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#303F9F ',
    fontSize: 16,
  },
});

export default GreetingCard;
