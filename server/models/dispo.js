import mongoose from 'mongoose';

// Submitted from Property Form and Created in Database
const propertySchema = mongoose.Schema ({
    name: String,
    address: String, 
    buyer: String,
    doubleEscrow: String,
    titleCompany: String,
    titleOfficer: String,
    titleEmail: String,
    titlePhone: String,
    signersName: String,
    vesting: String,
    contractPricing: String,
    emd: String,
    closing: String,
    coe: String,
    closeSooner: String,
    contractExecuted: String,
    buyersPhone: String,
    emailDocusign: String
});

const PostDispoProperty = mongoose.model('PostDispoProperty', propertySchema);

export default PostDispoProperty;