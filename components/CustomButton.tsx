import { View, Pressable, Text, StyleSheet } from 'react-native';

function CustomButton({
  children,
  style,
  onButtonPress,
}: {
  children: React.ReactNode;
  style?: object;
  onButtonPress: () => void;
}) {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.25 }]}
        onPress={onButtonPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#303F9F',
    fontWeight: 'bold',
  },
});

export default CustomButton;
