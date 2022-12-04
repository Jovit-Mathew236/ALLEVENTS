import React, {  useEffect, useState } from 'react'
// import { UserContext } from '../context'
import axios from "axios";
import './../App.css'
// import { Firebase } from './../firebase/config';
import { NavLink } from 'react-router-dom';

const AllDashBoard = () => {
  const [eventAPI, setEventAPI] = useState([])
  // const user_data = useContext(UserContext)
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


  function DeptName(code) {
    let data = {
      "MEC": "Mechaura - Mechanical Engineering", "RAD": "Radiance - Computer Science and Engineering", "AAK": "Aakrti - Civil Engineering", "SPE": "Spectra - Electronics and Communication Engineering", "EME": "Emerge - Electrical and Electronics Engineering", "YAN": "Yanthrika - Applied Electronics and Instrumentation", "AZT": "Aztec Allure - Artificial Intelligence and Data Science", "CRE": "Pandora - Electronics and Computer Science", "TRI": "Trilok - Master of Business Administration", "FEN": "Fenstra - Master of Computer Applications", "GEN": "General", "INF": "Informal"
    }
    return data[code.substring(3, 6)]
  }

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
                <p className="dept_card"> {DeptName(data.code)}</p>
              </div>
            </NavLink>
          )

        })}
      </div>
    </div >
  )
}

export default AllDashBoard