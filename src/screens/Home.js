import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SingleUser from '../components/SingleUser';
import {axiosInstance} from '../helpers/axiosInterceptor';

const Home = ({navigation}) => {
  const [userList, setUserList] = useState(null);
  useEffect(() => {
    const result = axiosInstance.get('users').then(result => {
      setUserList(result.data.users);
    });
  }, []);
  return (
    <ScrollView>
      <FlatList
        data={userList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SingleUser user={item} navigation={navigation} />
        )}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />

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
    </ScrollView>
  );
};

export default Home;
