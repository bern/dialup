import React from 'react';
import { MusicContainer } from './components/MusicContainer';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <div id="header" style={{ paddingTop: "64px" }}/>
      <div style={{ margin: 'auto', width: '80%', minWidth: '670px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          Dial-up Studio '97
        </div>
        <div>
          <MusicContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
