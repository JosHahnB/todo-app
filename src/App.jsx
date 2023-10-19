import React, { createContext } from 'react';
import Todo from './Components/Todo/index.jsx';

export const GlobalContext = createContext(null);

export default class App extends React.Component {
  render() {
    return (
      <GlobalContext.Provider
        value={{ displayCount: 3, hideComplete: false, sortWord: 'difficulty' }}
      >
        <Todo />
      </GlobalContext.Provider>
    );
  }
}
