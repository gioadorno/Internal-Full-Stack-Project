import mongoose from 'mongoose';

// Submitted from Submit a Book on homepage
const bookSchema = mongoose.Schema ({
    bookName: String,
    bookAuthor: String,
    bookLink: String,
    bookPhoto: String
});

const PostBook = mongoose.model('PostBook', bookSchema);

export default PostBook;