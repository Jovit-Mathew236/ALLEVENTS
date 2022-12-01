import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context'
import axios from "axios";
import './../App.css'
// import { Firebase } from './../firebase/config';
import { NavLink } from 'react-router-dom';

const AllDashBoard = () => {
  const [eventAPI, setEventAPI] = useState([])
  const user_data = useContext(UserContext)
  // const [info, setInfo] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://asthra.azba.in/_apiv2/event_details/all/0',
      headers: {
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
      },
      data: {
        email: 'jovitmathew236@gmail.com',
        code: 'A68FENW',
        access: 'c90b6446-6a7c-11ed-a1eb-0242ac120002'
      }
    };

    axios.request(options).then(function (response) {
      // console.log(response.data);
      setEventAPI(response.data)
      // console.log(eventAPI);
    }).catch(function (error) {
      console.error(error);
    });
  }, [setEventAPI])


  return (
    <div className='eventdash'>
      {/* {console.log(user_data.data.events)} */}
      <div className="card_container">
        {eventAPI.map((data, index) => {

          // console.log(data.code)
          return (
            // to={`../sjcet/${eventCode}`}
            <NavLink to={`../events/${data.code}`} key={index}>
              <div key={index} className="card" style={{ background: "orange" }}>
                <p className="event_name">{data.name}</p>
              </div>
            </NavLink>
          )

        })}
      </div>
    </div >
  )
}

export default AllDashBoard