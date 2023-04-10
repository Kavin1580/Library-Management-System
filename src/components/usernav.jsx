import { Link } from "react-router-dom";
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <div className="imgs">
                    <img src="/images/logo1.png"height="100px" width="250px" alt="" />
                </div>
                <div className="name">
                    <h1>COMIC LIBRARY</h1>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li><Link to={"/user/"}>Home</Link> </li>
                    <li><Link to={"/user/book-list"}>Book List</Link> </li>
                    <li><Link to={"/user/add-user"}> Add User</Link> </li>
                    <li><Link to={"/"}>Logout</Link> </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
