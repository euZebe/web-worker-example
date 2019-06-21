import React, { useState, useMemo } from "react";

const App = () => {
  const [answer, setAnswer] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // useMemo so that fie is not fetched each time the component is rerendered
  const worker = useMemo(() => new Worker("test.worker.js"), []);

  // define reaction to service worker message
  worker.onmessage = ({ data: response }) => {
    setAnswer(response);
    setLoading(false);
    setTimeout(() => setAnswer(null), 1000);
  };

  // define action to send to service worker
  const ping = () => {
    setLoading(true);
    worker.postMessage("ping");
  };

  return (
    <div>
      <h1>web worker example</h1>
      <button onClick={ping}>Ping ?</button>
      {isLoading ? <div className="loader" /> : <h3>{answer}</h3>}
    </div>
  );
};
export default App;
