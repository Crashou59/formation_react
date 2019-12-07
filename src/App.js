import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TopMenu } from './components/TopMenu/TopMenu';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PlayerReducer from './reducers/PlayerReducer';

const store = createStore(PlayerReducer)


function App() {
  return (<Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Header nickname="Toto"></Header>

      </header>
      <TopMenu />
    </div >
  </Provider>
  );
}

export default App;
