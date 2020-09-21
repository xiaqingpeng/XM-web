import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import reducer from "./combineReducers";
export default () => {
  const middlewares = [thunk,logger];
  const enhancers = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(...[enhancers]);
  const store = createStore(reducer, composedEnhancers);
  return store;
};


