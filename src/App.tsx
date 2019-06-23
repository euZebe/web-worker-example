import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import TestWorker from "worker-loader!./worker/test.worker.ts";
import {WorkerResponse} from "./worker/worker";

const App: React.FC = () => {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  // useMemo so that fie is not fetched each time the component is rerendered
  const worker: Worker = useMemo(() => {
    console.log("worker initiated only once");
    return new TestWorker();
  }, []);

  useEffect(() => {
    return () => {
      console.log("effect applied on unmount");
      worker.terminate();
    };
  }, [worker]);


  // define reaction to service worker message
  worker.onmessage = ({ data: response }: WorkerResponse) => {
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
