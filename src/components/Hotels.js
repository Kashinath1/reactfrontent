// imported all required files******************
import React from 'react';
import { Button } from 'react-bootstrap';
import hotel1 from '../Assets/img/hotel1.jpg';
import hotel2 from '../Assets/img/hotel2.jpg';
import hotel3 from '../Assets/img/hotel3.jpg';
import hotel4 from '../Assets/img/hotel4.jpg';
// import { useSelector } from 'react-redux';
// import AddHotelData from '../features/AddHotelData';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../Styles/Hotels.css';
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
const Hotels = () => {
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

    {
      name: 'bhaktapur inn',
      description: 'Best hotel in butwal',
      location: 'bhaktapur',
      price: 4000,
      img: hotel1,
    },
    {
      name: 'bhaktapur inn',
      description: 'Best hotel in butwal',
      location: 'bhaktapur',
      price: 4000,
      img: hotel2,
    },
    {
      name: 'bhaktapur inn',
      description: 'Best hotel in butwal',
      location: 'bhaktapur',
      price: 4000,
      img: hotel3,
    },
    {
      name: 'bhaktapur inn',
      description: 'Best hotel in Kathmandu',
      location: 'bhaktapur',
      price: 4000,
      img: hotel4,
    },

    {
      name: 'pokhara inn',
      description: 'Best hotel in butwal',
      location: 'pokhara',
      price: 4000,
      img: hotel1,
    },
    {
      name: 'pokhara inn',
      description: 'Best hotel in butwal',
      location: 'pokhara',
      price: 4000,
      img: hotel2,
    },
    {
      name: 'pokhara inn',
      description: 'Best hotel in butwal',
      location: 'pokhara',
      price: 4000,
      img: hotel3,
    },
  ];
  const [modalShow, setModalShow] = React.useState(false);
  // const hotelDetails = useSelector((state) => state.hotelDetails.value);

  return (
    <>
      <div className="row_div">
        <div className="col-left">
          <h1>SEARCH HOTEL</h1>
          <form action="">
            <input type="text" placeholder="Destination,City" />
            <input type="date" placeholder="Checked In" />
            <input type="date" placeholder="Checked Out" />
          </form>
          <Button variant="danger" onClick={() => setModalShow(true)}>
            Check Availability
          </Button>
        </div>
        <div className="col-middle">
          {dummyData.map((data, key) => {
            return (
              <Row key={key}>
                <Col>
                  <div className="hotels_section">
                    <div className="images">
                      <img src={data.img} alt="" />
                    </div>

                    <div className="description">
                      <div>
                        <h5>{data.name}</h5>
                        <h5>{data.description}</h5>
                        <h5>{data.location}</h5>
                      </div>
                      <div>
                        <h5>{data.price}/Night</h5>
                        <h5>FREE CANCELLATION</h5>

                        <Button
                          variant="success"
                          onClick={() => setModalShow(true)}
                        >
                          Search Rooms
                        </Button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hotels;
