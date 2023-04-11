import { Route,Routes } from "react-router-dom";
import AdminHome from "./adminhome";
import AdminBook from "./booklist";
import AdminNav from "./adminnav";
import AddBook from "./Addbook";
import AddUser from "./adduser";
import ReadBook from "./readbooks";
import UserList from "./user-list";
const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNav/>
            <Routes>
                <Route path="/" element={<AdminHome/>}/>
                <Route path="/book-list" element={<AdminBook/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminPortal;