import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SingleUser = ({navigation, user}) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '40%',
        height: 100,
        borderWidth: 1,
        margin: 20,
      }}
      onPress={() => navigation.navigate('UserDetail', {user: user})}>
      <View>
        <Image source={{uri: user.image}} style={{width: 30, height: 30}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          width: '50%',
        }}>
        <Text>{user.firstName}</Text>
        <Text>{user.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleUser;
