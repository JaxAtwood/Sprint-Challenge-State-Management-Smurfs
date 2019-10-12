import React, { useReducer } from "react";
import Smurf from "./Smurf";
import "./App.css";
import SmurfForm from "./SmurfForm";
import { reducer, initialState } from "../reducer/Reducer2";


const App = () => {
  const [{item, age, height}, dispatch] = useReducer(reducer, initialState);
  // console.log("TEST", item);

  const addTodo = item => {
    dispatch({ type: "ADD_TODO", text: item })
  };

  // const addAge = age => {
  //   dispatch({ type: "ADD_AGE", text: age })
  // };

  // const addHeight = height => {
  //   dispatch({ type: "ADD_HEIGHT", text: height})
  // };

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <Smurf />
        <SmurfForm 
          addTodo={addTodo}
          // addAge={addAge}
          // addHeight={addHeight}
        />
      </div>
    );
  }


export default App;
