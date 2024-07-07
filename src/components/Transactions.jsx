import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { CSVLink } from 'react-csv';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions, updateTransaction, deleteTransaction } from '../actions/transactionActions'; // Adjust path and action as needed
import './Transactions.css';

const Transactions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transactionsData = useSelector(state => state.transactionReducer.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // State for managing dialog visibility, selected transaction, and form data
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  // Function to handle opening the edit dialog
  const handleOpenDialog = (transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };

  // Function to handle closing the edit dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleViewDetails = (id) => {
    navigate(`/transaction/${id}`);
  };

  const handleDelete = (id) => {
    // Dispatch action to delete transaction
    dispatch(deleteTransaction(id));
  };

  // Function to handle form submission (update status)
  const handleSubmit = () => {
    // Perform the update logic here
    if (selectedTransaction && newStatus) {
      const updatedTransaction = { ...selectedTransaction, status: newStatus };
      dispatch(updateTransaction(updatedTransaction)); // Dispatch action to update transaction
      setOpen(false); // Close the dialog after submission
    }
  };

  const columns = [
    { field: 'transactionId', headerName: 'Transaction ID', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'vendorId', headerName: 'Vendor', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'time', headerName: 'Time', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button variant="contained" color="primary" size="small" style={{ marginRight: 10 }} onClick={() => handleOpenDialog(params.row)}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" size="small" style={{ marginRight: 10 }} onClick={() => handleDelete(params.row.id)}>
            Delete
          </Button>
          <Button variant="contained" color="primary" size="small" onClick={() => handleViewDetails(params.row.transactionId)}>
            View
          </Button>
        </>
      ),
    },
  ];
  

  const csvHeaders = [
    { label: 'Transaction ID', key: 'transactionId' },
    { label: 'Amount', key: 'amount' },
    { label: 'Vendor', key: 'vendorId' },
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

      {/* Edit Dialog */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Edit Status</DialogTitle>
        <DialogContent>
          {selectedTransaction && (
            <>
            <TextField
              label="Transaction ID"
              fullWidth
              value={selectedTransaction.transactionId}
              disabled
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="Current Status"
              fullWidth
              value={selectedTransaction.status}
              disabled
              style={{ marginBottom: 20 }}
            />
            <FormControl fullWidth style={{ marginBottom: 20 }}>
              <InputLabel>New Status</InputLabel>
              <Select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Processing">Processing</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </>
          
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Transactions;
