import initialState from './initialState';
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {...state, userList: action.payload};
    case 'ADD_USER':
      let tempList = state.userList.concat(action.payload);
      return {...state, userList: tempList};
    case 'REMOVE_USER':
      let filteredList = state.userList.filter(f => f.id !== action.payload);
      return {...state, userList: filteredList};
      return state;
    default:
      return state;
  }
}
