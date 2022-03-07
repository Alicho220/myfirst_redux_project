import { createStore } from "redux";

// this is the reducer
// it takes in 2 parameters the state and the action
const reducerFn = (state = { counter: 0 }, action) => {
  //synchronous function
  // we should not mutate the original state

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

//this is the actual store
// it takes the reducer function
const store = createStore(reducerFn);
export default store;
