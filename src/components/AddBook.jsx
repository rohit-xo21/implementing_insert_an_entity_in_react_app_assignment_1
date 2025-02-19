import './AddBook.css';
const AddBook = () => {
    return (
        <div className="body">
        <div className="add-book-container">
        <h1>Add Book</h1>
        <form>
            <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
            </div>
            <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" />
            </div>
            <div className="form-group">
            <label htmlFor="cover-image">Cover Image URL:</label>
            <input type="url" id="cover-image" name="cover-image" />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
    );

}

export default AddBook;