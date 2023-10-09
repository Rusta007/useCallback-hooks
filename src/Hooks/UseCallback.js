import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

function CallBack() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount(count + 1);
  };

  // Use a functional update to ensure correct state value is used
  const handleClick = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, [number]);

  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleCounter}>{count} </button>
      <h1>{number}</h1>
      <ChildA onClick={handleClick} />
    </>
  );
}

export default CallBack;
