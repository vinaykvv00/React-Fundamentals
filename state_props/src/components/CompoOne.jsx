import React from "react";

function CompoOne({ count, onClickhandler }) {
  const handleIncrement = onClickhandler;
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default CompoOne;
