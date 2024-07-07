import { combineReducers } from 'redux';
import vendorReducer from './vendorReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  vendorReducer: vendorReducer,
  transactionReducer: transactionReducer,
});

export default rootReducer;
