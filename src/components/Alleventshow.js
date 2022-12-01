import React, { useEffect, useState } from 'react'
import './../App.css'
// import axios from "axios";
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


    return (
        <div>
            <div className="table_container">
                <table>
                    <thead>
                        <tr>
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