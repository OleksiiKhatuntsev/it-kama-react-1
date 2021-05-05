import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import React from "react";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
