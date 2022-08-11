import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import {useDispatch} from 'react-redux';
import {addUser} from '../context/actions/userActions';
const AddUser = ({navigation}) => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const onChangeText = e => {
    setForm(prevState => ({...prevState, [e.type]: e.text}));
  };
  const submitUser = async () => {
    form['image'] = 'https://robohash.org/perferendisideveniet.png';
    //await dispatch({type: 'ADD_USER', payload: form});
    await dispatch(addUser(form));
    navigation.navigate('Home');
  };
  return (
    <View>
      <View>
        <Input
          title="First Name"
          onChangeText={text => onChangeText({text, type: 'firstName'})}
        />
        <Input
          title="Last Name"
          onChangeText={text => onChangeText({text, type: 'lastName'})}
        />
        <Input
          title="Age"
          onChangeText={text => onChangeText({text, type: 'age'})}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            margin: 20,
            borderRadius: 30,
          }}
          onPress={() => submitUser()}>
          <Text style={{color: 'white'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddUser;
