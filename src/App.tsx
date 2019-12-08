import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Player } from './components/Player/Player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header nickname="Toto"></Header>
      </header>
      <Player />
    </div>
  );
}

export default App;
