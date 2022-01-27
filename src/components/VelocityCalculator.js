import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import '../App.css'


// time 
// const velocity = displacement / time;

const VelocityCalculator = () => {

  // input variables
  const [displacement, setDisplacement] = useState(null);
  const [time, setTime] = useState(null);
  const [velocity, setVelocity] = useState(null);

  const clearButton = displacement > 0 || time > 0 || velocity > 0;

  // Formulas
  const displacementFormula = velocity * time;
  const timeFormula = displacement / velocity;
  const velocityFormula = displacement / time;

  // update events
  const handleDisplacement = (event) => {
    setDisplacement(event.target.value);

    if (time > 0){
      setVelocity(event.target.value / time);
    } else if (velocity > 0){
      setTime(event.target.value / velocity);
    }

  }
  // if displacement is more than 0 set velocity to velocity formula
  const handleTime = (event) => {
    setTime(event.target.value);

    if (displacement > 0){
      setVelocity(displacement / event.target.value);
    } else if (velocity > 0){
      setDisplacement(velocity * event.target.value);
    }

  }

  const handleVelocity = (event) => {
    setVelocity(event.target.value);

    if (displacement > 0){
      setTime(displacement / event.target.value);
    } else if (time > 0){
      setDisplacement(event.target.value * time);
    }

  }

  const handleClearButton = () => {
    setVelocity("");
    setTime("");
    setDisplacement("");
  }



  // set velocity
  return <div className='calculator'>
      displacement: <input type="number" step="any" value={displacement} onChange={handleDisplacement} /><br/>
      Time: <input type="number" step="any" value={time} onChange={handleTime} /><br/>
      Velocity: <input type="number" step="any" value={velocity} onChange={handleVelocity} /><br/>
      {clearButton && <button onClick={handleClearButton}>clear</button>}
  </div>
}

export default VelocityCalculator
