
import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTop from './Components/NavTop';
import NavMid from './Components/NavMid';
import NavBottom from './Components/NavBottom';
import Sliding from './Components/Sliding';
import Middle from './Components/Middle';
import MiddleSec from './Components/MiddleSec';
import Bottom from './Components/Bottom';
import  Footer2 from './Components/Footer';
import Navbar from './Components/Navbar';
import BubbleAnimation from './Components/Bubble';
import KiteAnimation from './Components/Bubble';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
   
    <Navbar/>
    {/* <div style={{ backgroundColor: 'red', height: '100px', margin: 0, padding: 0 }}></div>
    <div style={{ backgroundColor: 'blue', height: '100px', margin: 0, padding: 0 }}></div> */}
  </div>
  );
}

export default App;
