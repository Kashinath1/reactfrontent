import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/img/logo.jpeg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import '../Styles/Footer.css';

const myStyle = {
  width: '3rem',
  height: '4rem',
  color: '#FFFDE3',
};
const imgStyle = { height: '9rem' };

const Footer = () => {
  return (
    <>
      <footer>
        <div className="social_media">
          <img src={logo} alt="" style={imgStyle} />
          <FacebookIcon
            style={myStyle}
            onClick={() =>
              window.open(
                'https://www.facebook.com/profile.php?id=100083964946344',
                '_blank'
              )
            }
          />
        </div>
        <div className="about_link">
          <h4>Information</h4>
          <Link to="about">
            <span>About Us</span>
          </Link>
        </div>
        <div className="contact_info">
          <h4>Have any Questions?</h4>
          <span>
            <LocationOnIcon />
            Chabahil,Kathmandu
          </span>
          <span>
            <LocalPhoneIcon />
            +977 9823775820
          </span>

          <span
            onClick={() => window.open('mailto: info@merostay.com', '_blank')}
          >
            <LocalPostOfficeIcon />
            info@merostay.com
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
