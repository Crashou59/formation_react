import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header nickname="Toto"></Header>
      </header>
    </div>
  );
}

export default App;
