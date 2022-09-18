import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/ChooseUs.css';
const ChooseUs = () => {
  return (
    <div className="chooseUsContainer">
      <div className="content">
        <div className="chooseUsHeading">
          <h1>
            <b>Why</b>Choose Us?
          </h1>
        </div>

        <div className="chooseUsDescription">
          <p>
            We pride ourselves on delivering the best hotel prices from the
            largest selection of hotels in India. When looking for your perfect
            hotel in MeroStay our in-depth tools make it easy to browse rooms by
            hotel star rating, by destinations and availability in Nepal.
          </p>
        </div>
      </div>
      <Link to="about">
        <Button variant="danger">Read More</Button>
      </Link>
    </div>
  );
};

export default ChooseUs;
