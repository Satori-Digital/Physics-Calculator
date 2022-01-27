import React, { useState } from 'react'


const Formulas = () => {

    const displacementFormula = "velocity * time";
    const timeFormula = "displacement / velocity";
    const velocityFormula = "displacement / time";
  
    return <div>
        <h3>Physics Formulas</h3>
        <p>Displacement: {displacementFormula}</p>
        <p>Time: {timeFormula}</p>
        <p>Velocity: {velocityFormula}</p>
    </div>
}

export default Formulas