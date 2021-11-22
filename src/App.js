import React from "react";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";

const App = () => {
  return (
    <>
      <ExampleOne initialCount={9} />
      <ExampleTwo />
    </>
  );
};

export default App;
