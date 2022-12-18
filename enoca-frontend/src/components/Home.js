import './Home.css';
import clock from '../img/clock.png';
import mobile from '../img/mobile.png';
import wifi from '../img/Wifi.png';
import battery from '../img/Battery.png';
import Search from './Search';
import React from 'react';
import Footer from './Footer';

function App() {

  return (
    
    <div className="App">
      <div className="Navbar">
      <ul>
        <li><img src={clock} id='clock' alt='clock'></img></li>
        <li><img src={battery} id='battery' alt='battery'></img></li>
        <li><img src={wifi} id='wifi' alt='wifi'></img></li>
        <li><img src={mobile} id='mobile' alt='mobile'></img></li>
      </ul>
      </div>

      <div className="Search">
        
      </div>      
      
      <header className="App-header">
        <p>What do you want to watch?</p>  
        <Search />
        <Footer />
      </header>
    </div>

  );
}


export default App;

