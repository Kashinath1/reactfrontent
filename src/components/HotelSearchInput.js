import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/HotelSearchInput.css';

import { useDispatch } from 'react-redux';
import { addData } from '../Redux/Data';
import { Link } from 'react-router-dom';
const HotelSearchInput = (props) => {
  const [locationname, setLocationName] = useState('');
  const [hotelname, setHotelName] = useState('');

  const dispatch = useDispatch();
  return (
    <>
      <div className="myContainer">
        <div className="input_Container">
          <input
            type="text"
            placeholder="Search Hotel"
            className="input"
            value={hotelname}
            onChange={(event) => setHotelName(event.target.value)}
          />
          <select
            name=""
            id=""
            className="select"
            value={locationname}
            onChange={(event) => setLocationName(event.target.value)}
          >
            <option value="cities">Cities</option>
            <option value="kathmandu">kathmandu</option>
            <option value="bhaktapur">bhaktapur</option>
            <option value="pokhara">pokhara</option>
            <option value="chitwan">chitwan</option>
            <option value="nagarkot">nagarkot</option>
            <option value="butwal">butwal</option>
            <option value="bhairahawa">bhairahawa</option>
          </select>
          <Link to="/hotels">
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(
                  addData({ hotelName: hotelname, locationName: locationname })
                );
              }}
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HotelSearchInput;
