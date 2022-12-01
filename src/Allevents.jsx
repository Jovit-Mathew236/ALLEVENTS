import { useContext,useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
// import Access from "./assets/icons/Access";
import AddHide from "./assets/icons/AddHide";
import Dashboard from "./assets/icons/Dashboard";
import Logout from "./assets/icons/Logout";
import Menu from "./assets/icons/Menu";
import Status from "./assets/icons/Status";
import { UserContext } from "./context";
import { Firebase } from "./firebase/config";
import './stylesheets/App.css';

const Allevents = () => {
    const [margin, setMargin] = useState(null)
    const user_data = useContext(UserContext)

    return (
        <>
            <div className="admin_panel">
                <div className="container">
                    <button className="menu_btn" onClick={() => {
                        setMargin(margin === -120 ? -10 : -120)
                    }}><Menu /> </button>
                    <div className="admin_left_section" style={{ marginLeft: margin }}>
                        <div className="upper-btns">
                            <NavLink style={{ marginTop: "20px" }} className="button" to="dashboard"><Dashboard /><p>Dashboard</p></NavLink>
                            <NavLink className="button" to="dashboard"><Status /> <p>ALL Events</p></NavLink>
                            {/* <NavLink className="button" to="sjcetdashboard"><AddHide /> <p>SJCET</p></NavLink> */}
                            {/* <NavLink className="button" to="access"><Access /> <p>Access</p></NavLink> */}
                        </div>
                        <div className="lower-btn">
                            <div className="nav">
                                <img className="dp" src={user_data.data.profilePic} alt="" />
                            </div>
                            <button style={{ width: "100%" }} className="button" id='logout' onClick={() => { Firebase.auth().signOut() }}><Logout /> <p>Logout</p></button>
                        </div>
                    </div>

                    <div className="admin_right_section">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allevents