import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './components/Payment';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Mercado Pago Bricks Integration</h1>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment/:preferenceId" element={<Payment />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
