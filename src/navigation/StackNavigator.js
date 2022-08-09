import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import AddUser from '../screens/AddUser';
import UserDetail from '../screens/UserDetail';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
