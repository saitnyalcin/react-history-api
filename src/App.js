import React from 'react';
import logo from './logo.png';
import './App.css';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <History />
      </div>
    </div>
  );
}

export default App;
