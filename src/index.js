import React, { useContext } from "react";
import ReactDOM from "react-dom";

import NumberContext from "./Context";

import Display from "./Display";

// Create a Context

// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={45}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

// function Display1() {
//   // Use the Consumer to grab the value from context
//   // Notice this component didn't get any props!
//   return (
//     <NumberContext.Consumer>
//       {(value) => <div>The answer is {value}.</div>}
//     </NumberContext.Consumer>
//   );
// }

ReactDOM.render(<App />, document.querySelector("#root"));
