import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import avatar from "./profile/color_picker.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile profile={{ name: "Name Here", avatar: avatar }} />
      </header>

    </div>
  );
}

export default App;
