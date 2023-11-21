import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CanteenScreen from './screens/CanteenScreen';
import CartScreen from './screens/CartScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Canteen" component={CanteenScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Preparing" component={PreparingOrderScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name={"PreparingOrderScreen"} component={PreparingOrderScreen} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}