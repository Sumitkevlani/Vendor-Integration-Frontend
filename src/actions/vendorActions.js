import axios from 'axios';

import {ADD_VENDOR, FETCH_VENDORS, DELETE_VENDOR, UPDATE_VENDOR} from '../constants/vendorConstants.js';

axios.defaults.baseURL = 'http://localhost:8080';
// Action creators
export const addVendor = vendor => ({
  type: ADD_VENDOR,
  payload: vendor,
});

export const fetchVendorsSuccess = vendors => ({
  type: FETCH_VENDORS,
  payload: vendors,
});

export const deleteVendorSuccess = vendorId => ({
  type: DELETE_VENDOR,
  payload: vendorId,
});

export const updateVendorSuccess = vendor => ({
  type: UPDATE_VENDOR,
  payload: vendor,
});

// Thunk action creators
export const fetchVendors = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/vendors');
      dispatch(fetchVendorsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };
};

export const createVendor = vendor => {
  return async dispatch => {
    try {
      const response = await axios.post('/vendors', vendor);
      dispatch(addVendor(response.data));
    } catch (error) {
      console.error('Error creating vendor:', error);
    }
  };
};

export const deleteVendor = vendorId => {
  return async dispatch => {
    try {
      await axios.delete(`/vendors/${vendorId}`);
      dispatch(deleteVendorSuccess(vendorId));
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };
};

export const updateVendor = (vendorId, vendorDetails) => {
  return async dispatch => {
    try {
      const response = await axios.put(`/vendors/${vendorId}`, vendorDetails);
      dispatch(updateVendorSuccess(response.data));
    } catch (error) {
      console.error('Error updating vendor:', error);
    }
  };
};
