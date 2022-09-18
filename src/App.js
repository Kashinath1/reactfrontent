import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Home,
  Footer,
  About,
  Header,
  Hotels,
  Contact,
  AdminLoginForm,
  AdminDashboard,
  AddHotelForm,
  ProtectedRoute,
} from './components';
const BasicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const AdminLayout = () => {
  return <Outlet />;
};
function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState('');
  const getApiData = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8000/hotels/hotel/'
      );
      setMyData(res.data);
      console.log(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      {isError !== '' && <h2>{isError}</h2>}
      {myData.map((data, key) => {
        return (
          <div key={data.id}>
            <h1>{data.id}</h1>
            <h5>{data.hotel_name}</h5>
          </div>
        );
      })}
      <Routes>
        <Route path="/" exact element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/hotels" exact element={<Hotels />} />
          <Route path="/contact" exact element={<Contact />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminLoginForm />} />
          <Route
            path="/admin/dashboard"
            exact
            element={<ProtectedRoute Component={AdminDashboard} />}
          >
            <Route
              path="/admin/dashboard/addhotel"
              exact
              element={<AddHotelForm />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
