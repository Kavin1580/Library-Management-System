import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landingpage";
import Admin from "./components/admin";
import User from "./components/userlogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<LandingPage/>} />
          <Route path="/admin-login"element={<Admin/>} />
          <Route path="/user-login"element={<User/>} />
        </Routes>
      </BrowserRouter>
      <div className="admin"></div>
      <div className="user"></div>
    </div>
  );
}

export default App;
