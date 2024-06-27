import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { CSVLink } from 'react-csv';
import { useNavigate } from 'react-router-dom';
import './Transactions.css';

const transactionsData = [
  { id: 1, transactionId: 'TXN001', amount: 500, vendor: 'Amazon', status: 'Completed', time: '2023-12-01 14:30:00' },
  { id: 2, transactionId: 'TXN002', amount: 1000, vendor: 'Intuit', status: 'Pending', time: '2023-12-02 09:15:00' },
  { id: 3, transactionId: 'TXN003', amount: 750, vendor: 'PayPal', status: 'Failed', time: '2023-12-03 16:45:00' },
  { id: 4, transactionId: 'TXN004', amount: 7000, vendor: 'DELL', status: 'Pending', time: '2023-12-03 16:45:00' },
];

const Transactions = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/transaction/${id}`);
  };
  const columns = [
    { field: 'transactionId', headerName: 'Transaction ID', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'vendor', headerName: 'Vendor', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'time', headerName: 'Time', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button variant="contained" color="primary" size="small" style={{ marginRight: 10 }}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" size="small" style={{ marginRight: 10 }}>
            Delete
          </Button>
          <Button variant="contained" color="primary" size="small" onClick={()=>handleViewDetails(params.row.id)}>
            View
          </Button>
        </>
      ),
    },
  ];

  const csvHeaders = [
    { label: 'Transaction ID', key: 'transactionId' },
    { label: 'Amount', key: 'amount' },
    { label: 'Vendor', key: 'vendor' },
    { label: 'Status', key: 'status' },
    { label: 'Time', key: 'time' },
  ];

  return (
    <div className="transactions">
      <div className='transactions-header'>
        <h1>Transactions</h1>
        <CSVLink
            data={transactionsData}
            headers={csvHeaders}
            filename="transactions_report.csv"
            className="generate-report-button"
          >
            <Button variant="contained" color="primary">
              Generate Report
            </Button>
          </CSVLink>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={transactionsData} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default Transactions;
