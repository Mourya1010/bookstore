import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('role') === 'admin'; // make sure you're storing this on login

  if (!token || !isAdmin) {
    return <Navigate to="/admin" />
  }

  return children ? children : <Outlet />
}

export default AdminRoute;
