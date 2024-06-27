import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import './TransactionDetails.css';
import amazon from '../assets/amazon.png';
import cisco from '../assets/cisco.png';
import dell from '../assets/nescafe.png';
import sap from '../assets/sap.jpeg';
import paypal from '../assets/paypal.png';
import mastercard from '../assets/mastercard.png';
import intuit from '../assets/intuit.png';

const transactionsData = [
  { 
    id: 1, 
    transactionId: 'TXN001', 
    amount: 500, 
    vendor: 'Amazon', 
    status: 'Completed', 
    time: '2023-12-01 14:30:00',
    type: 'Buyer',
    paymentMethod: 'Credit Card',
    contactEmail: 'vendor1@example.com', 
    billingAddress: '123 Main Street, City, Country',
    notes: 'Payment for services rendered.', 
    attachments: [
      { name: 'Invoice.pdf', url: '/invoices/invoice1.pdf' },
      { name: 'Receipt.jpg', url: '/receipts/receipt1.jpg' }
    ]
  },
 
];

const vendorImages = {
  'Amazon': amazon, // Example path, replace with actual paths or URLs
  'Intuit': intuit,
  'PayPal': paypal,
};

const TransactionDetails = () => {
  const { id } = useParams();
  const transaction = transactionsData.find((txn) => txn.id === parseInt(id, 10));

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#4CAF50'; // Green
      case 'Pending':
        return '#FFC107'; // Orange
      case 'Failed':
        return '#F44336'; // Red
      default:
        return '#000'; // Default color
    }
  };

  return (
    <div className="transaction-details-container">
      <div className="vendor-details">
        <img src={vendorImages[transaction.vendor]} alt={transaction.vendor} className="vendor-logo" />
        <h2>{transaction.vendor}</h2>
        <p>Contact: {transaction.contactEmail}</p>
        <p>Type: {transaction.type}</p>
        <p>Billing Address: {transaction.billingAddress}</p>
      </div>
      <div className="transaction-details">
        <h1>Transaction Details</h1>
        <div className="detail-row">
          <div className="detail-label">Transaction ID:</div>
          <div className="detail-value">{transaction.transactionId}</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Date of Payment:</div>
          <div className="detail-value">{transaction.time}</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Status:</div>
          <div className="detail-value" style={{ color: getStatusColor(transaction.status) }}>{transaction.status}</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Amount:</div>
          <div className="detail-value">${transaction.amount}</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Payment Method:</div>
          <div className="detail-value">{transaction.paymentMethod}</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Notes:</div>
          <div className="detail-value">{transaction.notes}</div>
        </div>
        <div className="detail-row">
          <Button variant="contained" color="secondary" className="cancel-button">
            Cancel Transaction
          </Button>
        </div>
        {/* Attachments section */}
        {transaction.attachments && transaction.attachments.length > 0 && (
          <div className="detail-row">
            <div className="detail-label">Attachments:</div>
            <div className="detail-value">
              {transaction.attachments.map((attachment, index) => (
                <a key={index} href={attachment.url} target="_blank" rel="noopener noreferrer">{attachment.name}</a>
              ))}
            </div>
          </div>
        )}
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default TransactionDetails;
