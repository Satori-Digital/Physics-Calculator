import React from "react";
import VelocityCalculator from './components/VelocityCalculator';
import Formulas from "./components/Formulas";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <VelocityCalculator />
      <Formulas />
    </div>
  );
}

export default App;
