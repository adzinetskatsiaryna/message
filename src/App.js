import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from "./components/avatar/avatar";
import Messege from "./components/messege/messege"
import Nik from "./components/nik/nik";

const App = () => {
  return (
      <div className='app-wrapper'>
       <Nik/>
      <Avatar/>
      <Messege/>
      </div>
)
}
export default App;
