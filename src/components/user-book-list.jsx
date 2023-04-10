import { useEffect, useState } from "react";
import "../styles/booklist.css"
import { Navigate, useLocation } from "react-router-dom";
const UserBook = () => {
    let location = useLocation()
    let [book, setBook] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let res = await fetch(" http://localhost:2000/books")
            let data = await res.json()
            setBook(data)
        }
        fetchData();
    },[book])
    let deleteBook=(id)=>{
     fetch(`ttp://localhost:2000/books/${id}`,{method:'DELETE'})
    }
    let readBook=(id)=>{
    if (location.pathname== '/admin/book-list') {
        Navigate(`/admin/book-list/${id}`)
    } else {
        Navigate(`/user/book-list/${id}`)
    }
    }
    return (
        <div className="booklist">
            <div className="head">
            <h1>OUR BOOKS</h1>
            <div className="bk1">
            {book.map(data => (
                    <div className="bookdata">
                      <div className="img">
                            <img className="slide-img" src={data.imageLink} alt="img" height="400px" width="300px"/>                     
                           <div className="text">
                           <h4>Title :{data.title}</h4>
                            <h4>Written :{data.author}</h4>
                            <h4>Issues :{data.Issues}</h4>
                           </div>
                           <div className="btn-2">
                           <button onclick={()=>readBook(data.id)}>Read me </button>
                           {location.pathname == '/admin/book-list' && <button onClick={()=>deleteBook(data.id)}>DELETE</button>} 
                           </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </div>
    );
}

export default UserBook;
