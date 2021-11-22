import mongoose from 'mongoose';

// Submitted from Submit a Referral on homepage
const referralSchema = mongoose.Schema ({
    employeeName: String,
    refName: String,
    refNumber: String,
    refEmail: String,
    department: String
});

const PostReferral = mongoose.model('PostReferral', referralSchema);

export default PostReferral;