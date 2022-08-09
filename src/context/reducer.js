import initialState from './initialState';
export default function userReducer(state = initialState.userList, action) {
  switch (action.type) {
    case 'ADD_USER':
      return action.payload;
    case 'REMOVE_USER':
      return action.payload;
    default:
      return state;
  }
}
