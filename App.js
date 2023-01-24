import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./components/screens/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
    return (

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>

            </Stack.Navigator>

        </NavigationContainer>
    );
}
