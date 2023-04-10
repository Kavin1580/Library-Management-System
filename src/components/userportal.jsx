import { Route, Routes } from "react-router-dom";
import UserNav from "./usernav"
import ReadBook from "./readbooks";
import AdminHome from "./adminhome";
import UserBook from "./user-book-list"
const UserPortal = () => {
    return (
        <div className="user-portal">
            <UserNav />
            <Routes>
                <Route path="/" element={<AdminHome />} />
                <Route path="/book-list" element={<UserBook />} />
                <Route path="/book-list/:id" element={<ReadBook />} />
            </Routes>

        </div>
    );
}

export default UserPortal;