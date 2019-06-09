import React from "react";
import Data from "./Data";
import '../index.css';

const App = () => {
  return (
    <div id="app">
        <h1>Coins Converter</h1>
        <h3>Convert your pennies into Money</h3>
      <Data />
      <small>More conversions coming soon!</small>
    </div>
  );
};

export default App;
