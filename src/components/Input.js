import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Input = ({onChangeText, value, title}) => {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={{borderWidth: 1, borderColor: 'gray', margin: 10}}
        placeholder={title}
      />
    </View>
  );
};

export default Input;
