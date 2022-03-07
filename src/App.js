import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  //use to access the counter from the redux where we initialized our state.
  //the use selector takes two function, the state and object of the state.
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    //dispatch is used whenever you want to send a data to the redux store.
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
