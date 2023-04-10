import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {
    let params = useParams()
    const [data, setData] = useState({});
    useEffect(()=>{
        let fetchdata = async()=>{
            let res = await fetch(`http://localhost:2000/books/${params.id}`)
            let data = await res.json();
            setData(data)
        }
        fetchdata();
    })
    return ( 
            <div className="read">
                <h1>Read Me :D</h1> 
                <img src={data.imageLink} alt="" />
                <p>Book ID: {data.id}</p>
                <p>Book Title: {data.title}</p>
                <p>Book Author: {data.author}</p>
                <p>Book Year: {data.year}</p>
                <p>Book Issues: {data.Issues}</p>
                <p>Description: {data.Description}</p>
                <p>Book Link: {data.link}</p>
            </div>
     );
}
 
export default ReadBook;