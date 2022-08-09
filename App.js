import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import userReducer from './src/context/reducer';

const store = createStore(userReducer);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
