import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Home from './screens/Home';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} component={WelcomeScreen} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
