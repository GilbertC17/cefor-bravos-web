import React from 'react';
import AdminNavBar from './AdminNavBar';

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <AdminNavBar /> {/* Solo el AdminNavBar debe estar aquí */}
      <div className="flex-grow-1 p-3">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;