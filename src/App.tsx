import React from 'react';
import DogGrid from './components/DogGrid';
import ButtonAppBar from './components/ButtonAppBar';
import MySorobanReactProvider from './soroban/MySorobanReactProvider';
function App() {
  return (
    <div>
      <MySorobanReactProvider>
        <ButtonAppBar/>
        <DogGrid/>
      </MySorobanReactProvider>
    </div>
  );
}

export default App;
