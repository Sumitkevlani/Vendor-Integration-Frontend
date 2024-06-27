import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Vendors from './components/Vendors.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import Transactions from './components/Transactions.jsx';
import TransactionDetails from './components/TransactionDetails.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/transaction/:id" element={<TransactionDetails />} />
          <Route path="/analytics" element={<TransactionDetails />} />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
