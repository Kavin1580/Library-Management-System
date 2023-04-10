import "../styles/addbook.css"
const AddBook = () => {
    return ( 
       <div className="book-home">
            <div className="book">
            <form action="">
                <p>Book Title:</p>
                <input type="title" placeholder="enter title" />
                <p>Author Name</p>
                <input type="Author" placeholder="enter Author" />
                <p>Gener</p>
                <input type="Gener" placeholder="enter gener"/>
                <p>Thumbnail URL</p>
                <input type="Thumbnail" placeholder="enter thumbnail url"/>
                <button>Submit</button>
            </form>
        </div>
       </div>
     );
}
 
export default AddBook;