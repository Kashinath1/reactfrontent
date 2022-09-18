import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import logo  from '../Assets/img/logo.jpeg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom';
import HotelSearchInput from './HotelSearchInput';
import '../Styles/Header.css';

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
const Header = () => {
  // uselocation is imported to get page location to show/Hide Search Bar in header
  let pageLocation = useLocation();
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="navbar-Container">
        <Navbar variant="dark" sticky="top" className="color_nav">
          <Container className="Container">
            <LinkContainer to="/">
              <Navbar.Brand>
                <img src={logo} alt="" style={{ height: '3rem' }} />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <LinkContainer to="/">
                  <Nav.Link to="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hotels">
                  <Nav.Link>Hotels</Nav.Link>
                </LinkContainer>
                <LinkContainer to="contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <Nav.Link className="login" onClick={() => setModalShow(true)}>
                  Login
                </Nav.Link>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="hotelsearchSection">
          {pageLocation.pathname === '/' && <HotelSearchInput />}
        </div>
      </div>
    </>
  );
};

export default Header;
