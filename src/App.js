import React from 'react';
import './App.scss';
import VariableSlider      from './Components/VariableSlider/VariableSlider'
import VariableSliderWidth from './Components/VariableSlider--width/VariableSlider--width'

function App() {
  return (
    <div className="App">      
      <VariableSlider/>      
      <VariableSliderWidth/>      
    </div>
  );
}

export default App;
