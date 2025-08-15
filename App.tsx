import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from './screens/CounterScreen';
import { NavigationContainer } from '@react-navigation/native';
import GreetingScreen from './screens/GreetingScreen';
import ToggleScreen from './screens/ToggleScreen';
import TimerScreen from './screens/TimerScreen';
import InputHandlingScreen from './screens/InputHandlingScreen';
import TodoListScreen from './screens/TodoListScreen';
import ResponsiveCardGridScreen from './screens/ResponsiveCardGridScreen';
import MemoizedScreen from './screens/MemoizedScreen';
import CustomHookScreen from './screens/CustomHookScreen';
import DarkModeScreen from './screens/DarkModeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SimpleCounter" component={CounterScreen} />
            <Stack.Screen
              name="PersonalizedGreeting"
              component={GreetingScreen}
            />
            <Stack.Screen name="Toggle" component={ToggleScreen} />
            <Stack.Screen name="Timer" component={TimerScreen} />
            <Stack.Screen
              name="InputHandling"
              component={InputHandlingScreen}
            />
            <Stack.Screen name="TodoList" component={TodoListScreen} />
            <Stack.Screen
              name="ResponsiveCardGrid"
              component={ResponsiveCardGridScreen}
            />
            <Stack.Screen name="Memoized" component={MemoizedScreen} />
            <Stack.Screen name="CustomHook" component={CustomHookScreen} />
            <Stack.Screen name="DarkMode" component={DarkModeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
