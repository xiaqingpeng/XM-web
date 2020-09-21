import {GET_USER_INFO} from './actionType';
const initState = {
  userInfo: {
    token:'',
    password:'',
    telphone:''
  },
};
export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GET_USER_INFO:
      newState.userInfo = action.payload;
      return newState;
    default:
      return state;
  }
};
