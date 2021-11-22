import mongoose from 'mongoose';

// Submitted from Submit a Book on homepage
const announcementSchema = mongoose.Schema ({
    title: String,
    description: String,
    name: String,
    department: String,
    date: String
});

const PostAnnouncement = mongoose.model('PostAnnouncement', announcementSchema);

export default PostAnnouncement;