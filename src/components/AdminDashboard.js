import React from 'react';
import logo from '../Assets/img/logo.jpeg';
import { Outlet } from 'react-router-dom';
import '../Styles/AdminDashboard.css';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const navigate = useNavigate();
  // const adminAuthentication = useSelector(
  //   (state) => state.adminAuthentication.value
  // );
  return (
    <>
      <div className="dashboardMainContainer">
        <div className="dashboardLeftContainer">
          <div className="headerContainer">
            <img src={logo} alt="" />
            <h3>MeroStay</h3>
          </div>
          <div className="differentLinks">
            <p onClick={() => navigate('/admin/dashboard/addhotel')}>
              Add Hotel
            </p>
          </div>
        </div>
        <div className="dashboardRightContainer">
          {/* {hotelData.hotelName}
          {hotelData.hotelAddress}
          {hotelData.hotelLogo} */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
