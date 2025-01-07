import { useState } from "react";
function Element1() {
  const [count, setCount] = useState(0);

  return (
    <div className="logo">
      <div id="container">
        <div id="border"></div>
        <div id="blocker-1"></div>
        <div id="blocker-2"></div>
        <h2>Welcome to </h2>
        <h1>ModaMind</h1>
        <h2>the fantasy</h2>
      </div>
    </div>
  );
}

export default Element1;
