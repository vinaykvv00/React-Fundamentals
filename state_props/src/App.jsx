import React, { useState } from "react";
import CompoOne from "./components/CompoOne";
import CompoTwo from "./components/CompoTwo";

function App() {
  const [count, setCount] = useState(10);
  return (
    <section>
      <CompoOne count={count} onClickhandler={() => setCount(count + 1)} />
    //  <CompoTwo count={count} setCount={setCount} />
    </section>
  );
}

export default App;
