import { ADD_ROUTER,SUB_ROUTER } from "./actionType";
const initState = {
  routerList: []
};
export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
 
  switch (action.type) {
    case ADD_ROUTER:
      newState.routerList = action.payload;
      return newState;
    case SUB_ROUTER:
    
      newState.routerList = action.payload;
      return newState;
    default:
      return state;
  }
};
