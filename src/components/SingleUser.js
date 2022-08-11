import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useDispatch} from 'react-redux';
import {removeUser} from '../context/actions/userActions';
const SingleUser = ({navigation, user}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '40%',
        height: 200,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: '5%',
        marginVertical: '5%',
        borderRadius: 15,
      }}
      onPress={() => navigation.navigate('UserDetail', {user: user})}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
        <ImageBackground
          source={{uri: user.image}}
          style={{width: '100%', height: '100%', padding: 10}}>
          <View style={{position: 'absolute', right: 0, top: 0}}>
            <TouchableOpacity onPress={() => removeUser(user.id)(dispatch)}>
              <Icon name="trash" size={25} color="purple" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
              width: '100%',
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}>
            <Text style={{fontWeight: 'bold'}}>{user.firstName}</Text>
            <Text style={{fontWeight: 'bold'}}>{user.age}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default SingleUser;
