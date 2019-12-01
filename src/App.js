import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TopMenu } from './components/TopMenu/TopMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header nickname="Toto"></Header>

      </header>
      <TopMenu />
    </div >
  );
}

export default App;
