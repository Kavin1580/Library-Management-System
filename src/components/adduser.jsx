import "../styles/adduser.css"
const AddUser = () => {
    return ( 
        <div className="user-home">
            <div className="user">
            <form action="">
                <p>Name</p>
                <input type="text" placeholder="enter Name" />
                <p>Email</p>
                <input type="text" placeholder="enter email" />
                <p>Contact</p>
                <input type="text" placeholder="enetr contact" />
                <button>Submit</button>
            </form>
        </div>
        </div>
     );
}
 
export default AddUser;