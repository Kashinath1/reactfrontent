import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import { adminLoginSchema } from '../Schemas';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAuthenticationStatus } from '../Redux/AdminAuthentication';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  name: '',
  password: '',
 
};
const AdminLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminAuthentication = useSelector(
    (state) => state.adminAuthentication.value
  );

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: adminLoginSchema,
    onSubmit: (values, action) => {
      if (values.name === 'admin' && values.password === 'admin123') {
        dispatch(setAuthenticationStatus(true));
        navigate('/admin/dashboard');
        action.resetForm();
      }
    },
  });
  return (
    <>
      <Wrapper>
        <div className="adminLoginFormContainer">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Admin Login</h1>
                <p className="modal-desc">MeroStay.com</p>
                <form onSubmit={handleSubmit} className="adminLoginForm">
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      className="adminLoginFormInput"
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      className="adminLoginFormInput"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  
                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .modal {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 30vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    transition-duration: 0.3s;
  }
  .modal-title {
    margin: 0;
    font-weight: 900;
    color: #55311c;
    text-align: center;
  }
  .form-error {
    font-size: 0.7rem;
    color: #b22b27;
  }
  .modal-desc {
    ${'' /* margin: 2px 0 10px 0; */}
  }
  .modal-left {
    padding: 10px 30px 0px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .input-button {
    padding: 1rem 3rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: white;
    border-radius: 4px;
    background: #c21010;
    transition: 0.3s;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }
  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }
  .input-block {
    display: flex;
    flex-direction: column;
    padding: 3px 3px 3px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: 0.3s;
  }
  .input-block {
    outline: 0;
    border: 0;
    padding: 2px 0 0;
    font-size: 14px;
  }
  .adminLoginFormInput::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .adminLoginFormInput:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .adminLoginFormInputinput::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .adminLoginFormInput:focus-within {
    border-color: red;
  }
  .adminLoginFormInput:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }
  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }
  }
`;
export default AdminLoginForm;