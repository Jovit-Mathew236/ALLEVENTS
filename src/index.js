import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { Firebase } from './firebase/config';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from './context';
import Allevents from './Allevents';
import AllDashBoard from './components/AllDashBoard';
import Alleventshow from './components/Alleventshow';
import Login from './Login';

class AsthraApp extends React.Component {
    constructor(props) {
        super(props);
        this.load_data = this.load_data.bind(this);
        this.state = { user: this.props.data, data: null }
    }
    componentDidMount() {
        if (this.state.user !== null) {
            this.load_data()
        }
    }
    load_data = () => {
        Firebase.firestore().collection('user').doc(this.state.user.email).get().then((snapshot) => {
            // console.log(snapshot.data());
            if (snapshot.exists) {
                this.setState({ data: snapshot.data() });
            } else {
                Firebase.auth().signOut()
            }
            // this.setState({ data: snapshot.data() });
            // this.setState({ data: { user_role: 'admin' } });
        })
    }
    render() {
        return (
            <>
                <UserContext.Provider value={this.state}>
                    {/* <button onClick={() => {
                        Firebase.auth().signOut();
                    }}>sIGNOUT</button> */}
                    {this.state.data !== null ?
                        <BrowserRouter>
                            <Routes>
                                <Route index element={<Navigate to="allevents" />} />
                                


                                <Route path='allevents' element={<Allevents />}>
                                    <Route index element={<Navigate to="dashboard" />} />
                                    <Route path="dashboard" element={<AllDashBoard />} />
                                    <Route path="events/:code" element={<Alleventshow />} />
                                    <Route path="*" element={<>404</>} />
                                </Route>

                            </Routes>
                        </BrowserRouter> : <>Please Wait...</>}
                </UserContext.Provider>
            </>
        )
    }
}


function Application() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Firebase.auth().signOut()
    useEffect(() => {
        Firebase.auth().onAuthStateChanged((user) => {
            setLoading(false)
            setUser(user);
            // console.log(user);
        });
    }, [Firebase, setUser])
    return (
        <>
            {loading ? <>Loading</> : <>
                {user !== null ?
                    <AsthraApp data={user} /> : <Login />}
            </>}
        </>
    )
}

export default Application;




// import Application from './Application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Application />
    // </React.StrictMode>
);



