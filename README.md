# Vendor Integration Platform - Frontend

## Project Overview

This project provides a frontend interface for managing vendor information and transactions. It includes several pages for different functionalities:

- **Home Page**: Overview of the project and its objectives.
- **Vendor Details Page**: Displays details of all vendors.
- **Transactions Page**: Lists all transactions.
- **Vendor-specific Page**: Shows transactions specific to a selected vendor. Admin can update transactions related to the vendor.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Redux**: State management library for managing application state.
- **React Router**: Navigation library for routing between different pages.
- **Axios**: HTTP client for making API requests to the backend.
- **Bootstrap**: CSS framework for styling components.

## Pages and Features

### Home Page

- Overview of the project.
- Objectives and functionalities.
- Contact information or support details.

### Vendor Details Page

- Displays a list of all vendors.
- Allows filtering and sorting of vendors.
- Links to individual vendor pages for detailed information.

### Transactions Page

- Lists all transactions across all vendors.
- Filters for date range, transaction type, or vendor.
- Pagination for navigating through transaction records.

### Vendor-specific Page

- Shows transactions specific to a selected vendor.
- Allows admin users to update transaction details for the vendor.
- Provides links back to the vendor details and transactions pages.

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js installed on your local machine.
- Access to the backend server API (ensure it is running and accessible).

### Steps to Run the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sumitkevlani/Vendor-Integration-Frontend
   cd Vendor-Integration-Frontend

2. **Install dependencies:** 
   ```bash
   npm install

3. **Start the development server**
    ```bash
    npm run dev

## Access the application

- The application will open in your default web browser at http://localhost:5173/.
