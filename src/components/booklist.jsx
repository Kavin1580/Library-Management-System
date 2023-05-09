import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/booklist.css"
const AdminBook = () => {
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
     fetch(`http://localhost:2000/books/${id}`,{method:'DELETE'})
    //  {book.map(data=>{
    //     alert({data.title})
    //  })}
     
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
                           <button><Link to={`/admin/book-list/${data.id}`}>Read me</Link> </button>
                            <button onClick={()=>deleteBook(data.id)}>DELETE</button>
                           </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </div>
    );
}

export default AdminBook;
