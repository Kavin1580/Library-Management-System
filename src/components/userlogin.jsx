import { useRef } from "react"
import { useNavigate } from "react-router-dom"
const User = () => {
    let email = useRef(null)
    let password = useRef(null)
    let Navigate = useNavigate()
    let userLogin = () => {
        if (email.current.value == "kavin@gmail.com" && password.current.value == 12345) {
            Navigate("/user")
        } else {
            alert('Inavlid Credential')
        }
    }
    return (
        <div className="admin-home">
            <div className="admin">
                <h1>User Login</h1>
                <form action="" onSubmit={userLogin}>
                    <div className="loginform">
                        <div className="email">
                            <input ref={email} type="Email" placeholder="enter email" />
                        </div>
                        <div className="pass">
                            <input ref={password} type="Password" placeholder="enter Password" />
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

export default User;