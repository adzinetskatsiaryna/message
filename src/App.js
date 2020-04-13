import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from "./components/avatar/avatar";
import Messege from "./components/messege/messege"
import Nik from "./components/nik/nik";

const App = () => {
    let qualities = [
        {id:0, title: 'communist', type: false},
        {id:1, title: 'liberall', type: true},
        {id:2, title: 'monarchist', type: false},
        {id:3, title: 'anarchist', type: false},
        {id:4, title: 'nationalist', type: false},
    ];

  return (
      <div className='app-wrapper'>
       <Nik/>
      <Avatar/>
      <Messege quality={qualities}/>
      </div>
)
}
export default App;
