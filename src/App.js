import React, { useState } from "react";
import Open from "./components/open";
import Christmas from "./components/Christmas";

function App() {
  const [showChristmas, setShowChristmas] = useState(false);

  return (
    <div>
      {showChristmas ? (
        <Christmas />
      ) : (
        <Open onComplete={() => setShowChristmas(true)} />
      )}
    </div>
  );
}

export default App;

