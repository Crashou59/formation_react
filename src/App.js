import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TopMenu } from './components/TopMenu/TopMenu';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import PlayerReducer from './reducers/PlayerReducer';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import playerEpic from './epics/PlayerEpics';
import { compose } from 'redux';

export const favoriteLanguageContext = React.createContext('french');

export const rootEpic = combineEpics(
  playerEpic
);

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  PlayerReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)));


epicMiddleware.run(playerEpic);



function App() {
  return (<Provider store={store}>
    <div className="App">
      <header className="App-header">
        <favoriteLanguageContext.Provider value='frensh'><Header nickname="Toto"></Header>
        </favoriteLanguageContext.Provider>
      </header>
      <TopMenu />
    </div >
  </Provider>
  );
}

export default App;
