// **********imported all the required file *******************************
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick-theme.css';
import hotel1 from '../Assets/img/hotel1.jpg';
import hotel2 from '../Assets/img/hotel2.jpg';
import hotel3 from '../Assets/img/hotel3.jpg';
import hotel4 from '../Assets/img/hotel4.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../Styles/BestDealCaraousel.css';
//***************************************************** *
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mero Stay Online Hotel Booking In Nepal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>To be launch Soon, Stay Tuned</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const BestDealCaraousel = () => {
  // dummy data for the cities
  let dummyData = [
    {
      name: 'kathmandu inn',
      description: 'Best hotel in Kathmandu',
      location: 'kathmandu',
      price: 4000,
      img: hotel1,
    },
    {
      name: 'kathmandu hyatt inn',
      description: 'Best hotel in Kathmandu',
      location: 'kathmandu',
      price: 3000,
      img: hotel2,
    },
    {
      name: 'kathmandu best inn',
      description: 'Best hotel in Kathmandu',
      location: 'kathmandu',
      price: 2000,
      img: hotel3,
    },
    {
      name: 'kathmandu family inn',
      description: 'Best hotel in Kathmandu',
      location: 'kathmandu',
      price: 4000,
      img: hotel4,
    },
    {
      name: 'Butwal inn',
      description: 'Best hotel in butwal',
      location: 'butwal',
      price: 4000,
      img: hotel1,
    },
    {
      name: 'Butwal inn',
      description: 'Best hotel in butwal',
      location: 'butwal',
      price: 4000,
      img: hotel2,
    },
    {
      name: 'butwal inn',
      description: 'Best hotel in butwal',
      location: 'butwal',
      price: 4000,
      img: hotel3,
    },
    {
      name: 'butwal inn',
      description: 'Best hotel in Kathmandu',
      location: 'butwal',
      price: 4000,
      img: hotel4,
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
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="bestDealCaraouselContainer">
        <Row>
          <h1>Best Deals:</h1>
          {/* caraousel started from here */}
          <Slider {...settings}>
            {/* map function added to the dummy data of cities to display all */}
            {dummyData.map((data) => {
              return (
                <Col key={data.name} className="px-2">
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      onClick={() => setModalShow(true)}
                    />
                    <h3>{data.name}</h3>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
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

export default BestDealCaraousel;
