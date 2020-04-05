import { ADD_TODO, SUB_TODO } from "../action/action-type";
const initState = {
  formList: {},
  subList: {},
};
export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      newState.formList = action.payload;
      return newState;
    case SUB_TODO:
      console.log(action.payload)
      newState.subList = action.payload;
      return newState;
    default:
      return state;
  }
};
