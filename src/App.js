import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Player from './components/Player';
import { Registration } from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header nickname="Toto"></Header>

      </header>
      <Player />
      <Registration />
    </div >
  );
}

export default App;
