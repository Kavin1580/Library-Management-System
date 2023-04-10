import { useRef } from "react";
import "../styles/admin.css"
import { Navigate, useNavigate } from "react-router-dom";
const Admin = () => {
    let email = useRef(null)
    let password = useRef(null)
    let navigate = useNavigate();

    let adminLogin = () => {
        if (email.current.value == "admin@gmail.com" && password.current.value == 12345) {
            console.log("hiii");
            navigate("/admin")
        } else {
            alert('Inavlid Credential')
        }

    }
    return (
            <div className="admin-home">
                <div className="admin">
                <h1>Admin Login</h1>
                <form action="" onSubmit={adminLogin}>
                    <div className="loginform">
                        <div className="email">
                            <input ref={email} type="email" placeholder="enter email" />
                        </div>
                        <div className="pass">
                            <input ref={password} type="password" placeholder="enter Password" />
                        </div>
                        <div className="btn">
                            <button>login</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
    );
}

export default Admin;