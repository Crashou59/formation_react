import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TopMenu } from './components/TopMenu/TopMenu';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import PlayerReducer from './reducers/PlayerReducer';
import PlayerEpic from './epics/PlayerEpic';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

export const rootEpic = combineEpics(
  PlayerEpic
);

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  PlayerReducer,
  applyMiddleware(epicMiddleware));


epicMiddleware.run(rootEpic);

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
