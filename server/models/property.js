import mongoose from 'mongoose';

// Submitted from Property Form and Created in Database
const propertySchema = mongoose.Schema ({
    name: String,
    writtenOffer: String,
    supplier: String,
    supplierName: String,
    supplierEmail: String,
    supplierPhone: String,
    address: String,
    arv: String,
    netPrice: String,
    salePrice: String,
    emd: String,
    optionFee: String,
    dealSplit: String,
    jvAgreement: String,
    additionalCost: String,
    closingCost: String,
    coe: String,
    ipLength: String,
    titleCompany: String,
    titleOfficer: String,
    titleEmail: String,
    titlePhone: String,
    typeAccess: String,
    postPossession: String,
    leaseDetails: String,
    tenantOccupied: String,
    leaseTerm: String,
    notes: String,
    beds: String,
    baths: String,
    parking: String,
    pool: String,
    livingArea: String,
    lotSize: String,
    year: String,
    pictureLink: String,
    market: String,
    propPhoto: String
});

const PostProperty = mongoose.model('PostProperty', propertySchema);

export default PostProperty;