import React from 'react';
import logo from './logo.svg';
import './App.css';
import {other} from "./res/strings";
import {appStrings} from "./res/strings";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {appStrings.welcome.heading}
          {other.mystring.heading}
        </a>
      </header>
    </div>
  );
}

export default App;
