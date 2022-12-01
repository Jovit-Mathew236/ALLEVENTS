import React, { useEffect, useState } from 'react'
import './../App.css'
import axios from "axios";
import { Firebase } from '../firebase/config';
import { useParams } from 'react-router';

const Alleventshow = () => {
    const { code } = useParams()
    const [info, setInfo] = useState([])
    const [eventAPI, setEventAPI] = useState([])


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
                    <h1>{code}</h1>
                    <p>{info.length}</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
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
                                        <td>{index+1}</td>
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

            </div>
        </div>
    )
}

export default Alleventshow