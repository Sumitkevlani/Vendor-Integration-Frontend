import axios from 'axios';

import { ADD_TRANSACTION,REMOVE_TRANSACTION,UPDATE_TRANSACTION,FETCH_TRANSACTIONS, FETCH_TRANSACTION_BY_ID } from '../constants/transactionConstants.js';

axios.defaults.baseURL = 'http://localhost:8080';
// Action creators
export const addTransaction = transaction => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const removeTransaction = transactionId => ({
  type: REMOVE_TRANSACTION,
  payload: transactionId,
});

export const updateTransaction = transaction => ({
  type: UPDATE_TRANSACTION,
  payload: transaction,
});

export const fetchTransactionsSuccess = transactions => ({
  type: FETCH_TRANSACTIONS,
  payload: transactions,
});

export const fetchTransactionByIdSuccess = transaction => ({
  type: FETCH_TRANSACTION_BY_ID,
  payload: transaction,
});

export const fetchTransactions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/transactions');
      console.log(response)
      dispatch(fetchTransactionsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };
};

export const createTransaction = transaction => {
  return async dispatch => {
    try {
      const response = await axios.post('/transactions', transaction);
      dispatch(addTransaction(response.data));
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };
};

export const deleteTransaction = transactionId => {
  return async dispatch => {
    try {
      await axios.delete(`/transactions/${transactionId}`);
      dispatch(removeTransaction(transactionId));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };
};

export const editTransaction = transaction => {
  return async dispatch => {
    try {
      const response = await axios.put(`/transactions/transaction/${transaction.id}`, transaction);
      dispatch(updateTransaction(response.data));
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };
};

export const fetchTransactionById = (transactionId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/transactions/transaction/${transactionId}`);
      dispatch(fetchTransactionByIdSuccess(response.data));
    } catch (error) {
      console.error('Error fetching transaction by ID:', error);
    }
  };
};
