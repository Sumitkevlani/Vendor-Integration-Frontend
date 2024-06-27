import React from 'react';
import Card from './Card';
import './Home.css';
import citi_logo from '../assets/citi_logo.jpeg';
import analytics from '../assets/analytics.jpeg';
import transaction from '../assets/transaction.png';
import vendors from '../assets/vendors.jpg';
const Home = () => {
  return (
    <div className="home">
      <img src={citi_logo} alt="Citi Bank Logo" className="logo" />

      <h1 className='heading'>Welcome to Citi Vendor Management</h1>

      <p className='paragraph'>Manage all your vendors and transactions in one place.</p>
      <div className="cards">
        <Card title="Manage Vendors" description="Keep track of all your vendors." img={vendors} />
        <Card title="Manage Transactions" description="Monitor and manage all transactions." img={transaction}/>
        <Card title="Analytics" description="Get detailed analytics of vendor performance." img={analytics}/>
      </div>
    </div>
  );
};

export default Home;
