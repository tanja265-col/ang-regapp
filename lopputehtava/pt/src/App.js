import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Trainingslist from './components/Trainingslist';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  return (
    <div className="App">
      <Customerlist />
      <Trainingslist />
    </div>
  );
}

export default App;
