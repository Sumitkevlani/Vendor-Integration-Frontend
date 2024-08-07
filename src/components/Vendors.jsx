import React, { useState } from 'react';
import './Vendors.css';
import amazon from '../assets/amazon.png';
import cisco from '../assets/cisco.png';
import dell from '../assets/nescafe.png';
import sap from '../assets/sap.jpeg';
import paypal from '../assets/paypal.png';
import mastercard from '../assets/mastercard.png';
import intuit from '../assets/intuit.png';
import flipkart from '../assets/flipkart.png';
import bigbasket from '../assets/bigbasket.png';
import hindustan_unilever from '../assets/hindustan_unilever.png';

const vendorsData = [
  {
    logo: amazon,
    name: 'Amazon',
    type: 'Buyer',
    contractPeriod: '1 year',
    contractEnding: '2023-12-31'
  },
  {
    logo: cisco,
    name: 'Cisco',
    type: 'Supplier',
    contractPeriod: '3 years',
    contractEnding: '2023-05-14'
  },
  {
    logo: dell,
    name: 'Dell',
    type: 'Supplier',
    contractPeriod: '2 years',
    contractEnding: '2023-05-14'
  },
  {
    logo: sap,
    name: 'SAP',
    type: 'Supplier',
    contractPeriod: '2 years',
    contractEnding: '2023-05-14'
  },
  {
    logo: mastercard,
    name: 'MasterCard',
    type: 'Buyer',
    contractPeriod: '2 years',
    contractEnding: '2023-05-14'
  },
  {
    logo: paypal,
    name: 'PayPal',
    type: 'Buyer',
    contractPeriod: '2 years',
    contractEnding: '2023-05-14'
  },
  {
    logo: intuit,
    name: 'Intuit',
    type: 'Buyer',
    contractPeriod: '2 years',
    contractEnding: '2023-05-14'
  },
  {
    logo: flipkart,
    name: 'Flipkart',
    type: 'Seller',
    contractPeriod: '2 years',
    contractEnding: '2023-05-14'
  },
  {
    logo: bigbasket,
    name: 'Bigbasket',
    type: 'Buyer',
    contractPeriod: '2 years',
    contractEnding: '2026-07-12'
  },
  {
    logo: hindustan_unilever,
    name: 'Hindustan Unilever',
    type: 'Seller',
    contractPeriod: '7 years',
    contractEnding: '2025-09-11'
  }
];

const Vendors = () => {
  const [vendors, setVendors] = useState(vendorsData);

  // Function to edit vendor details
  const handleEdit = (index) => {
    // Simulate editing the vendor details here (just an example)
    const updatedVendors = [...vendors];
    // For demonstration, let's change the contract period
    updatedVendors[index].contractPeriod = 'Updated period';
    setVendors(updatedVendors);
  };

  // Function to delete a vendor
  const handleDelete = (index) => {
    // Simulate deleting the vendor from the list
    const updatedVendors = vendors.filter((vendor, i) => i !== index);
    setVendors(updatedVendors);
  };

  return (
    <div className="vendors">
      <h1>Citi Vendors</h1>
      <button className="add-vendor-button">Add Vendor</button>
      <div className="vendor-list">
        {vendors.map((vendor, index) => (
          <div key={index} className="vendor-card">
            <img src={vendor.logo} alt={vendor.name} className="vendor-logo" />
            <h3>{vendor.name}</h3>
            <p>Type: {vendor.type}</p>
            <p>Contract Period: {vendor.contractPeriod}</p>
            <p>Contract Ending: {vendor.contractEnding}</p>
            <div className="vendor-actions">
              <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
