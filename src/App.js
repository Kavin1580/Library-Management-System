import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landingpage";
import Admin from "./components/admin";
import User from "./components/userlogin";
import AdminPortal from "./components/adminportal";
import UserPortal from "./components/userportal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route id="a1" path="/"element={<LandingPage/>} />
          <Route id="a2" path="/admin-login"element={<Admin/>} />
          <Route id="a3" path="/user-login"element={<User/>} />
          <Route id="a4" path="/admin/*"element={<AdminPortal/>} />
          <Route id="a5" path="/user/*"element={<UserPortal/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
