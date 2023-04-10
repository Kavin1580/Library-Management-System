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
                    <li><Link to={"/admin/"}>Home</Link> </li>
                    <li><Link to={"/admin/book-list"}>Book List</Link> </li>
                    <li><Link to={"/admin/user-list"}>User List</Link> </li>
                    <li><Link to={"/admin/add-book"}>Add Books</Link> </li>
                    <li><Link to={"/admin/add-user"}> Add User</Link> </li>
                    <li><Link to={"/"}>Logout</Link> </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
