import { ADD_VENDOR, FETCH_VENDORS, UPDATE_VENDOR, DELETE_VENDOR } from "../constants/vendorConstants.js";
const initialState = {
    vendors: [],
};
  
const vendorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VENDOR:
        return {
            ...state,
            vendors: [...state.vendors, action.payload],
        };
        case FETCH_VENDORS:
        return {
            ...state,
            vendors: action.payload,
        };
        case DELETE_VENDOR:
        return {
            ...state,
            vendors: state.vendors.filter(vendor => vendor.id !== action.payload),
        };
        case UPDATE_VENDOR:
        return {
            ...state,
            vendors: state.vendors.map(vendor =>
            vendor.id === action.payload.id ? action.payload : vendor
            ),
        };
        default:
        return state;
    }
};
  
export default vendorReducer;
  