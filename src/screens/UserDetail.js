import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const UserDetail = ({route}) => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(route.params.user);
  }, []);
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: user?.image}} style={{width: 100, height: 100}} />
      </View>
      <View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            First Name: {user?.firstName}
          </Text>
          <View style={{height: 1, width: '90%', backgroundColor: 'gray'}} />
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Last Name: {user?.lastName}
          </Text>
          <View style={{height: 1, width: '90%', backgroundColor: 'gray'}} />
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Age: {user?.age}
          </Text>
          <View style={{height: 1, width: '90%', backgroundColor: 'gray'}} />
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Company Name: {user?.company.name}
          </Text>
          <View style={{height: 1, width: '90%', backgroundColor: 'gray'}} />
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Department: {user?.company.department}
          </Text>
          <View style={{height: 1, width: '90%', backgroundColor: 'gray'}} />
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Title: {user?.company.title}
          </Text>
          <View style={{height: 1, width: '90%', backgroundColor: 'gray'}} />
        </View>
      </View>
    </View>
  );
};

export default UserDetail;
