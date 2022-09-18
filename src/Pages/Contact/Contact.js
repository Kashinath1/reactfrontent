import React from 'react';
import { Button, Form, Modal } from '../../components';
import './Contact.css';
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
const Contact = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="contactContainer">
        <div className="contactUpperInformation">
          {' '}
          <h3>Contact Information</h3>
          <p>
            Ready to book with us? Have a question about our rooms or services
            ?We'll be happy to help !
          </p>
          <h3>MeroStay.com</h3>
          <p>Chabahil,kathmandu,kathmandu,Bagmati,Nepal</p>
          <p>Meorstayinfo@gmail.com</p>
          <h3>Front Desk Hours</h3>
          <p>10:00 am - 2:00 am</p>
        </div>

        <div className="contactInformation">
          <div className="formSection">
            <Form className="formSection-form">
              <Form.Group controlId="formBasicEmail ">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Message"
                className="textarea"
              />

              <Button
                variant="danger"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setModalShow(true);
                }}
              >
                Submit
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Form>
          </div>
          <div className="mapSection">
            <p>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1348.720117800853!2d85.34716921922974!3d27.717705122057183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a40a81f8b%3A0x8f8aa03750134ae4!2sTAATOMITHO!5e0!3m2!1sen!2snp!4v1662117244340!5m2!1sen!2snp"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// AIzaSyAyAUMLd43_HV4AxjkXfiT80asCvF2imaA
