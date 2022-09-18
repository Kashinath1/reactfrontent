import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const adminAuthentication = useSelector(
    (state) => state.adminAuthentication.value
  );
  const value = adminAuthentication.toString();

  useEffect(() => {
    if (value === 'false') {
      navigate('/');
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
