import { useEffect, useState } from "react";
import "../styles/booklist.css"
const UserList = () => {
    let [user, setUser] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let res = await fetch(" http://localhost:2000/Users")
            let data = await res.json()
            setUser(data)
        }
        fetchData();
    },[user])
    let deleteUser=(id)=>{
     fetch(`ttp://localhost:2000/Users/${id}`,{method:'DELETE'})
    }
    return (
        <div className="User-list">
            <div className="head">
            <h1>OUR User</h1>
            <div className="bk1">
            {user.map(data => (
                    <div className="UserList">                   
                           <div className="text">
                           <h4>ID :{data.ID}</h4>
                            <h4>Name :{data.Name}</h4>
                            <h4>Contact :{data.Phone_No}</h4>
                           </div>
                           <div className="btn-2">
                            <button onClick={()=>deleteUser(data.id)}>DELETE</button>
                           </div>
                        </div>
                ))}
                </div>
            </div>

        </div>
    );
}

export default UserList;
