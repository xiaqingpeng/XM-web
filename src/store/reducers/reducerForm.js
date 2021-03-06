import { ADD_TODO, SUB_TODO } from "../action/action-type";
const initState = {
  formList: {},
  subList: {},
};
export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_TODO:
      newState.formList = action.payload;
      return newState;
    case SUB_TODO:
      newState.subList = action.payload;
      return newState;
    default:
      return state;
  }
};
