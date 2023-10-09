import React from "react";

function ChildA({ onClick }) {
  console.log("Child Component..");

  return (
    <>
      <button onClick={onClick}>Increment</button>
    </>
  );
}
export default React.memo(ChildA);
