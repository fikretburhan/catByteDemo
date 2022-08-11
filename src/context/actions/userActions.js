import {axiosInstance} from '../../helpers/axiosInterceptor';
export const setUsers = () => {
  return async dispatch => {
    await axiosInstance.get('users').then(res => {
      dispatch({type: 'SET_USERS', payload: res.data.users});
    });
  };
};
export const addUser = payload => {
  return async dispatch => {
    dispatch({type: 'ADD_USER', payload});
  };
};
export const removeUser = payload => dispatch => {
  dispatch({type: 'REMOVE_USER', payload});
};
