import React from 'react';
import './App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Profile from "./Profile";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
          <NavBar/>
          <Profile/>
        </div>
    );
}

export default App;
