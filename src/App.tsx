import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TopMenu } from './components/TopMenu/TopMenu';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import PlayerReducer from './reducers/PlayerReducer';
import PlayerEpic from './epics/PlayerEpic';
import { createEpicMiddleware } from 'redux-observable';
import { compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  PlayerReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)));


epicMiddleware.run(PlayerEpic);

function App() {
  return (<Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Header nickname="Toto"></Header>
      </header>
      <TopMenu />
    </div>
  </Provider>
  );
}

export default App;
