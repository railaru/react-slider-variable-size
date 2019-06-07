import React, { Suspense, lazy } from 'react';
import './App.scss';
import FullWidthSliderLoadingMockup from './Components/Holders/FullWidthSlider/FullWidthSliderLoadingMockup'
//import VariableSlider from './Components/VariableSlider/VariableSlider'

const FullWidthSlider = lazy(() => import('./Components/Holders/FullWidthSlider/FullWidthSlider'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <FullWidthSliderLoadingMockup />
      }>
        <FullWidthSlider />
      </Suspense>
    </div>
  );
}

export default App;
