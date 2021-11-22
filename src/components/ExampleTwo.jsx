import React, { useState } from "react";

const WarningNotUsed = () => {
  return <p>Todavía no se ha usado el counter</p>;
};

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(" ")}</p>;
};

const ExampleTwo = () => {
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => setClicks([...clicks, "L"]);
  const handleClickRight = () => setClicks([...clicks, "R"]);

  const handleReset = () => setClicks([]);

  const left = clicks.filter((item) => item === "L");
  const right = clicks.filter((item) => item === "R");

  return (
    <div>
      <h2>Example 2</h2>
      {left.length}
      <button onClick={handleClickLeft} type="button">
        Left
      </button>
      <button onClick={handleClickRight} type="button">
        Right
      </button>
      {right.length}
      <p>Clicks totales: {clicks.length}</p>
      <p>
        {clicks.length === 0 ? (
          <WarningNotUsed />
        ) : (
          <ListOfClicks clicks={clicks} />
        )}
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ExampleTwo;
