import React, { useEffect, useState, useRef } from 'react'
import './../App.css'
import axios from "axios";
import { Firebase } from '../firebase/config';
import { useParams } from 'react-router';
import { DownloadTableExcel } from 'react-export-table-to-excel';

const Alleventshow = () => {
    const { code } = useParams()
    const [info, setInfo] = useState([])
    const [eventAPI, setEventAPI] = useState([])
    const tableRef = useRef(null);
let fileName = ''


    useEffect(() => {
        // console.log(code);
        Firebase.firestore().collection(`attendees/${code}/participates`).get().then((snapshot) => {
            // console.log(snapshot.docs);

            const alldocs = snapshot.docs.map((infos) => {
                // console.log(infos);
                return {
                    ...infos.data(),
                    id: infos.id
                }
            })
            // console.log(alldocs)
            setInfo(alldocs)
        }).catch((e) => {
            console.log(e.message);
        })
    }, [Firebase, setInfo])


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
        <div>
            <div className="table_container">
                <div className="head">
                    {
                        eventAPI.map((data, index) => {

                            // console.log(data.code)
                            if (code === data.code) {
                                // console.log(data.name);
                                fileName = data.name
                                return (
                                    // to={`../sjcet/${eventCode}`}
                                    <h1 key={index}>{data.name}</h1>
                                )
                            }
                        })
                    }
                    <p>Count : {info.length}</p>
                </div>
                <table ref={tableRef}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Day</th>
                            <th>Name</th>
                            <th>Event</th>
                            <th>College</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info.map((data, index) => {
                                // console.log(data)
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.day === "Day 2" ? data.day : null}</td>
                                        <td>{data.name}</td>
                                        <td>{data.event}</td>
                                        <td>{data.college}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="exel_btn_sec">
                    <DownloadTableExcel filename={fileName} sheet="users" currentTableRef={tableRef.current} className="exel_btn">
                        <button className="exel_btn"> Export to excel </button>
                    </DownloadTableExcel>
                </div>

            </div>
        </div>
    )
}

export default Alleventshow