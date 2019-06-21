import React, { useState } from "react";
import App from "./App";

/**
 * this is a doomy component enabling to unmount App, so that we can see the effect being applied only on unmount
 */

const Empty = () => <div />;

const Wrapper = () => {
  const [CurrentView, setCurrentView] = useState('app');

  const toggleViewApp = () => setCurrentView(CurrentView === 'app' ? 'empty' : 'app');

  const DisplayedComponent = CurrentView === 'app' ? App : Empty;

  return (
    <div>
      <button onClick={toggleViewApp}>View / hide app</button>
      <DisplayedComponent />
    </div>
  );
};

export default Wrapper;
