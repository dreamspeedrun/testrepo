import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './home';
import CartScreen from './cart';





const Stack = createStackNavigator()


export default function App() {

  const [value, setValue] = useState('helloooooo');

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen name = "Home" component= {HomeScreen} options = {{header: () => null}}/>
        <Stack.Screen name = "My Cart" component= {CartScreen} options = {{
          headerTitleAlign: 'center',
          headerTintColor: 'orange',
    }}/> 
      </Stack.Navigator>
    </NavigationContainer>


  );
}
