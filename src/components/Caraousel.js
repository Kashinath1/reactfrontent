// **********imported all the required file *******************************
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick-theme.css';
import kathmandu from '../Assets/img/kathmandu.jpg';
import bhaktapur from '../Assets/img/bhaktapur.jpeg';
import bhairahawa from '../Assets/img/bhairahawa.jpg';
import butwal from '../Assets/img/butwal.jpg';
import chitwan from '../Assets/img/chitwan.jpg';
import nagarkot from '../Assets/img/nagarkot.jpg';
import pokhara from '../Assets/img/pokhara.jpg';
import lalitpur from '../Assets/img/lalitpur.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import { setImageLocation } from '../Redux/Data';

import { Link } from 'react-router-dom';
import '../Styles/Caraousel.css';
//***************************************************** *

const Caraousel = () => {
  // dummy data for the cities
  var citiesData = [
    {
      name: 'Kathmandu,Nepal',
      img: kathmandu,
      location: 'kathmandu',
    },
    {
      name: 'Bhaktapur,Nepal',
      img: bhaktapur,
      location: 'bhaktapur',
    },
    {
      name: 'Lalitpur,Nepal',
      img: lalitpur,
      location: 'lalitpur',
    },
    {
      name: 'Chitwan,Nepal',
      img: chitwan,
      location: 'chitwan',
    },
    {
      name: 'Bhairahawa,Nepal',
      img: bhairahawa,
      location: 'bhairahawa',
    },
    {
      name: 'Butwal,Nepal',
      img: butwal,
      location: 'butwal',
    },
    {
      name: 'Pokhara,Nepal',
      img: pokhara,
      location: 'pokhara',
    },
    {
      name: 'Nagarkot,Nepal',
      img: nagarkot,
      location: 'nagarkot',
    },
  ];

  // this is the slick carousel setting**************
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // this is to navigate to another page when user click on the image******

  const dispatch = useDispatch();

  return (
    <>
      <div className="caraouselContainer">
        <Row>
          <h1>Hotels By cities:</h1>
          {/* caraousel started from here */}
          <Slider {...settings}>
            {/* map function added to the dummy data of cities to display all */}
            {citiesData.map((data) => {
              return (
                <Col key={data.name} className="px-2">
                  <div>
                    <Link to="/hotels">
                      <img
                        src={data.img}
                        alt=""
                        onClick={() => {
                          dispatch(
                            setImageLocation({
                              locationName: data.location,
                            })
                          );
                        }}
                      />
                    </Link>
                    <h3>{data.name}</h3>
                  </div>
                </Col>
              );
            })}
          </Slider>
        </Row>
      </div>
    </>
  );
};

export default Caraousel;
