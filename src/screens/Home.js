import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SingleUser from '../components/SingleUser';

import {useSelector, useDispatch} from 'react-redux';
import {setUsers} from '../context/actions/userActions';
const Home = ({navigation}) => {
  const userList = useSelector(s => s.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsers());
  }, []);

  return (
    <View>
      <FlatList
        data={userList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SingleUser user={item} navigation={navigation} />
        )}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => renderFooter({navigation})}
        ListEmptyComponent={
          <View
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color="blue" />
          </View>
        }
      />
    </View>
  );
};

const renderFooter = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddUser')}
      style={{
        height: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        margin: 20,
        borderRadius: 30,
      }}>
      <Text style={{color: 'white'}}>Add User</Text>
    </TouchableOpacity>
  );
};

export default Home;
