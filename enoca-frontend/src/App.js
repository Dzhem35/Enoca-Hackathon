import logo from './popcorn 1.png';
import './App.css';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);


  return (
    <div className="App">
      {loading ? (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
      ) : (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />     
      </header>
      )}
    </div>

  );
}


export default App;
