import mongoose from 'mongoose';

// Submitted from Submit a Book on homepage
const markerSchema = mongoose.Schema ({
    address: String,
    lat: Number,
    lng: Number,
    arv: String,
    salePrice: String,
    beds: String,
    baths: String,
    parking: String,
    pool: String,
    livingArea: String,
    lotSize: String,
    year: String,
    pictureLink: String,
    market: String,
    propPhoto: String,
});

const PostMarker = mongoose.model('PostMarker', markerSchema);

export default PostMarker;