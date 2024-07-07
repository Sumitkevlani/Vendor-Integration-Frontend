// TransactionDetails.jsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactionById } from '../actions/transactionActions';
import { Button } from '@mui/material';
import './TransactionDetails.css';
import amazon from '../assets/amazon.png';
import intuit from '../assets/intuit.png';
import paypal from '../assets/paypal.png';

const vendorImages = {
  'Amazon': amazon,
  'Intuit': intuit,
  'PayPal': paypal,
};

const TransactionDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const transaction = useSelector(state => state.transactionReducer.transaction);

  useEffect(() => {
    dispatch(fetchTransactionById(id));
  }, [dispatch, id]);

  if (!transaction) {
    return <div>Loading...</div>;
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
