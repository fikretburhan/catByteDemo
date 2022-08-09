import {View, Text} from 'react-native';
import React from 'react';
import Input from '../components/Input';

const AddUser = () => {
  const onChangeText = () => {};
  return (
    <View>
      <Input title="First Name" onChangeText={onChangeText} />
      <Input title="Last Name" />
      <Input title="Age" />
      <Input title="Company Name" />
      <Input title="Department" />
    </View>
  );
};

export default AddUser;
