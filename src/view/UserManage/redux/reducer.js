import  {FIND_USER,UPDATE_USER, INSERT_USER, DELETE_USER}  from './actionType.js'
const initState = {
  userList: {}
};
export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
 
  switch (action.type) {
    case FIND_USER:
      newState.userList = action.payload;
      return newState;
    default:
      return state;
  }
};
