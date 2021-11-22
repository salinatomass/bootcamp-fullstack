import React, { useState } from "react";

const Counter = ({ number }) => {
  return <h3>{number}</h3>;
};

const ExampleOne = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = (e) => {
    e.target.name === "increment"
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => prevCount - 1);
  };

  const handleClickReset = () => {
    setCount(initialCount);
  };

  const isEven = count % 2 === 0 ? "Es par" : "No es par";

  return (
    <div>
      <h2>Example 1</h2>
      <p>El valor del contador es:</p>
      <Counter number={count} />
      <p>{isEven}</p>

      <button name="increment" onClick={handleClick} type="button">
        Incrementar
      </button>
      <button name="decrement" onClick={handleClick} type="button">
        Decrementar
      </button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

export default ExampleOne;
