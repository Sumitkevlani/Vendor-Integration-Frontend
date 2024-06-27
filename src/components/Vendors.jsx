import React from 'react';
import './Vendors.css';
import amazon from '../assets/amazon.png';
import cisco from '../assets/cisco.png';
import dell from '../assets/nescafe.png';
import sap from '../assets/sap.jpeg';

const vendorsData = [
  {
    logo: amazon,
    name: 'Amazon',
    type: 'Buyer',
    contractPeriod: '2022-01-01 to 2023-12-31',
    contractEnding: '2023-12-31'
  },
  {
    logo: cisco,
    name: 'Cisco',
    type: 'Supplier',
    contractPeriod: '2021-05-15 to 2023-05-14',
    contractEnding: '2023-05-14'
  },
  {
    logo: dell,
    name: 'Dell',
    type: 'Supplier',
    contractPeriod: '2021-05-15 to 2023-05-14',
    contractEnding: '2023-05-14'
  },
  {
    logo: sap,
    name: 'SAP',
    type: 'Supplier',
    contractPeriod: '2021-05-15 to 2023-05-14',
    contractEnding: '2023-05-14'
  },
];

const Vendors = () => {
  return (
    <div className="vendors">
      <h1>Citi Vendors</h1>
      <div className="vendor-list">
        {vendorsData.map((vendor, index) => (
          <div key={index} className="vendor-card">
            <img src={vendor.logo} alt={vendor.name} className="vendor-logo" />
            <h3>{vendor.name}</h3>
            <p>Type: {vendor.type}</p>
            <p>Contract Period: {vendor.contractPeriod}</p>
            <p>Contract Ending: {vendor.contractEnding}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
