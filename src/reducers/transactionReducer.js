import { ADD_TRANSACTION,REMOVE_TRANSACTION,UPDATE_TRANSACTION,FETCH_TRANSACTIONS,FETCH_TRANSACTION_BY_ID } from '../constants/transactionConstants.js';

const initialState = {
  transactions: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.payload.id ? action.payload : transaction
        ),
      };
    case FETCH_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case FETCH_TRANSACTION_BY_ID: 
      return {
        ...state,
        transaction: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
