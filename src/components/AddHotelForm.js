

import React, { useEffect, useState } from 'react';
import '../Styles/AddHotelForm.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
const initialValues = {
  hotel_image: '',
  hotel_name: '',
  hotelAddress: '',
  hotelCity: '',
  hotelPhoneNo: '',
  hotelEmail: '',
  singleRoom: '',
  singleRoomPrice: '',
  doubleRoom: '',
  doubleRoomPrice: '',
  luxuryRoom: '',
  luxuryRoomPrice: '',
  familyRoom: '',
  familyRoomPrice: '',
  suiteRoom: '',
  suiteRoomPrice: '',
};
const AddHotelForm = () => {
  // const navigate = useNavigate();
  // const [postId, setPostId] = useState(null);
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log(values)
    },
  });
  const handleDataSubmitClick = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body:({
        "hotel_name": "xyz",
        "hotel_description": "this is one of the five star hotels located inside the kathmandu valley",
        "hotel_image": "http://192.168.0.125:8000/media/hotels/images/hotels.png",
        "price": 1400,
        "types_of_room": "Single",
        "created": "2022-09-07T08:25:42.423794Z",
        "update": "2022-09-07T08:25:42.423794Z",
        "emenities": [
            1,
            2,
            3,
            4,
            5
        ]
      })
    };  
    await fetch(
      'http://127.0.0.1:8000/hotels/hotel/',
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
console.log(values)
  return (
    <>
      <div className="addHotelFormContainer">
        <div className="form">
          <form onSubmit={handleSubmit} className="addHotelForm">
            <div className="leftHoteInformation">
              <h4>Hotel Details:</h4>
              <label htmlFor="hotelimage"></label>
              <input
                type="file"
                placeholder=" Hotel Logo"
                name="hotel_image"
                id="hotel_image"
                value={values.hotel_image}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="hotelname">Hotel Name:</label>
              <input
                type="text"
                name="hotel_name"
                id="hotel_name"
                placeholder=" Hotel Name"
                value={values.hotel_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <label htmlFor="hoteladdress">Hotel Address:</label>
              <input
                type="text"
                name="hotelAddress"
                value={values.hotelAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Hotel Address"
              />

              <label htmlFor="hotelcity">Hotel city:</label>
              <input
                type="text"
                name="hotelCity"
                value={values.hotelCity}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" Hotel City"
              />

              <label htmlFor="phoneno">Phone No:</label>
              <input
                type="text"
                name="hotelPhoneNo"
                value={values.hotelPhoneNo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Hotel phone number"
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="hotelEmail"
                value={values.hotelEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=" Hotel Email"
              />
            </div>

            <div className="rightHotelInformation">
              <h4>Types of Rooms:</h4>
              <label htmlFor="singleroom">Single room:</label>
              <input
                type="number"
                name="singleRoom"
                value={values.singleRoom}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No of single room in hotel"
              />
              <input
                type="number"
                name="singleRoomPrice"
                value={values.singleRoomPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Price/per Room"
              />
              <label htmlFor="doubleroom">Double room:</label>
              <input
                type="number"
                name="doubleRoom"
                value={values.doubleRoom}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No of double room in hotel"
              />
              <input
                type="number"
                name="doubleRoomPrice"
                value={values.doubleRoomPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Price/per Room"
              />
              <label htmlFor="luxuryroom">Luxury room:</label>
              <input
                type="number"
                name="luxuryRoom"
                value={values.luxuryRoom}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No of Luxury room in hotel"
              />
              <input
                type="number"
                name="luxuryRoomPrice"
                value={values.luxuryRoomPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Price/per Room"
              />
              <label htmlFor="familyroom">Family room:</label>
              <input
                type="number"
                name="familyRoom"
                value={values.familyRoom}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No of Family room in hotel"
              />
              <input
                type="number"
                name="familyRoomPrice"
                value={values.familyRoomPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Price/per Room"
              />
              <label htmlFor="suiteroom">Suite Room:</label>
              <input
                type="number"
                name="suiteRoom"
                value={values.suiteRoom}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No of suite  room"
              />
              <input
                type="number"
                name="suiteRoomPrice"
                value={values.suiteRoomPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Price/per Room"
              />
              <div className="buttons">
                <input
                  type="submit"
                  className="addHotelSubmitButton"
                  onClick={handleDataSubmitClick}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddHotelForm;
















// AARKO CODE HO
// import React, { useState } from 'react';
// import '../Styles/AddHotelForm.css';
// import axios from 'axios';

// const AddHotelForm = () => {
//   const [logo,setLogo]=useState('')
//   const [name,setName]=useState("")
//   const [description,setDescription]=useState("")
//   const [address,setAddress]=useState("")
//   const [city,setCity]=useState("")
//   const [phonenumber,setNumber]=useState("")
//   const [email,setEmail]=useState("")
//   const postHotelData= async (e)=>{
  
//     e.preventDefault();
//     const options = { 
//       method: 'post',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'multipart/FormData'
//       },
//       body:JSON.stringify({
//       "hotel_name": name,
//         "hotel_description": description,
//         "hotel_image": "http://192.168.0.125:8000/media/hotels/images/hotels.png",
//         "price": 1400,
//         "types_of_room": "Single",
//         "created": "2022-09-07T08:25:42.423794Z",
//         "update": "2022-09-07T08:25:42.423794Z",
//         "emenities": [
//             1,
//             2,
//             3,
//             4,
//             5
//         ]
//       })
//     }    
    
//     fetch('http://192.168.0.125:8000/hotels/hotel/', options)
//       .then(response => {
//          console.log(response)        
//          if (response.ok) {
//              return response.json();
//              console.log("hellos")
//            } else {
//               throw new Error('Something went wrong ...');
//            }
//       })
//       .then(response=>response.json())
//       .catch(error => console.log(error));
//   }

//   return (
//     <>
//       <div className="addHotelFormContainer">
//         <div className="form">
//           <form  className="addHotelForm">
//             <div className="leftHoteInformation">
//               <h4>Hotel Details:</h4>
//               <label htmlFor="logo"></label>
//               <input
//                 type="file"
//                name='logo'
//                value={logo}
//                 style={{width:'20rem'}}
//                 onChange={(e)=>setLogo(e.target.files[0])}
//               />
//               <label htmlFor="hotelname">Hotel Name:</label>
//               <input
//                 type="text"
//                 name='name'
//                 value={name}
//                  onChange={(e)=>setName(e.target.value)}
//               />

//               <label htmlFor="hoteladdress">Hotel Address:</label>
//               <input
               
//                 type="text"
//                 name='address'
//                 value={address}
//                  onChange={(e)=>setAddress(e.target.value)}
//               />

//               <label htmlFor="hotelcity">Hotel city:</label>
//               <input
//                  type="text"
//                  name='city'
//                  value={city}
//                   onChange={(e)=>setCity(e.target.value)}
//               />
//               <label htmlFor="hotelDescription">Hotel  Description:</label>
//               <textarea id="hotelDescription"  rows="2"
//                type="description"
//                name='description'
//                value={description}
//                 onChange={(e)=>setDescription(e.target.value)}
//               ></textarea>
              

//               <label htmlFor="phoneno">Phone No:</label>
//               <input
//                  type="text"
//                  name='phonenumber'
//                  value={phonenumber}
//                   onChange={(e)=>setNumber(e.target.value)}
//               />

//               <label htmlFor="email">Email:</label>
//               <input
//                  type="email"
//                  name='email'
//                  value={email}
//                   onChange={(e)=>setEmail(e.target.value)}
//               />
//             </div>

//             {/* <div className="rightHotelInformation">
//               <h4>Types of Rooms:</h4>
//               <label htmlFor="singleroom">Single room:</label>
//               <input
//                 type="number"
//                 name="singleRoom"
//                 value={values.singleRoom}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="No of single room in hotel"
//               />
//               <input
//                 type="number"
//                 name="singleRoomPrice"
//                 value={values.singleRoomPrice}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Price/per Room"
//               />
//               <label htmlFor="doubleroom">Double room:</label>
//               <input
//                 type="number"
//                 name="doubleRoom"
//                 value={values.doubleRoom}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="No of double room in hotel"
//               />
//               <input
//                 type="number"
//                 name="doubleRoomPrice"
//                 value={values.doubleRoomPrice}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Price/per Room"
//               />
//               <label htmlFor="luxuryroom">Luxury room:</label>
//               <input
//                 type="number"
//                 name="luxuryRoom"
//                 value={values.luxuryRoom}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="No of Luxury room in hotel"
//               />
//               <input
//                 type="number"
//                 name="luxuryRoomPrice"
//                 value={values.luxuryRoomPrice}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Price/per Room"
//               />
//               <label htmlFor="familyroom">Family room:</label>
//               <input
//                 type="number"
//                 name="familyRoom"
//                 value={values.familyRoom}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="No of Family room in hotel"
//               />
//               <input
//                 type="number"
//                 name="familyRoomPrice"
//                 value={values.familyRoomPrice}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Price/per Room"
//               />
//               <label htmlFor="suiteroom">Suite Room:</label>
//               <input
//                 type="number"
//                 name="suiteRoom"
//                 value={values.suiteRoom}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="No of suite  room"
//               />
//               <input
//                 type="number"
//                 name="suiteRoomPrice"
//                 value={values.suiteRoomPrice}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Price/per Room"
//               />
//               </div> */}
//               <div className="buttons">
//                 <input
//                   type="submit"
//                   className="addHotelSubmitButton"
//                   onClick={postHotelData}
//                 />
//               </div>
            
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddHotelForm;