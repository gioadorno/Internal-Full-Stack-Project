import PostProperty from '../models/property.js';
import PostBook from '../models/book.js';
import PostDispoProperty from '../models/dispo.js';
import PostAnnouncement from '../models/announcement.js';
import PostMarker from '../models/markers.js';
import PostReferral from '../models/referral.js';



export const getProps = async (req, res) => {
    try {
        const postProperties = await PostProperty.find();

        res.status(200).json(postProperties);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createProp = async (req, res) => {

    const prop = {  
        name: req.body.name,
        writtenOffer: req.body.writtenOffer,
        supplier: req.body.supplier,
        supplierName: req.body.supplierName,
        supplierEmail: req.body.supplierEmail,
        supplierPhone: req.body.supplierPhone,
        address: req.body.address,
        arv: req.body.arv,
        netPrice: req.body.netPrice,
        salePrice: req.body.salePrice,
        emd: req.body.emd,
        optionFee: req.body.optionFee,
        dealSplit: req.body.dealSplit,
        jvAgreement: req.body.jvAgreement,
        additionalCost: req.body.additionalCost,
        closingCost: req.body.closingCost,
        coe: req.body.coe,
        ipLength: req.body.ipLength,
        titleCompany: req.body.titleCompany,
        titleOfficer: req.body.titleOfficer,
        titleEmail: req.body.titleEmail,
        titlePhone: req.body.titlePhone,
        typeAccess: req.body.typeAccess,
        postPossession: req.body.postPossession,
        leaseDetails: req.body.leaseDetails,
        tenantOccupied: req.body.tenantOccupied,
        leaseTerm: req.body.leaseTerm,
        notes: req.body.notes,
        beds: req.body.beds,
        baths: req.body.baths,
        parking: req.body.parking,
        pool: req.body.pool,
        livingArea: req.body.livingArea,
        lotSize: req.body.lotSize,
        year: req.body.year,
        pictureLink: req.body.pictureLink,
        market: req.body.market,
        propPhoto: req.body.propPhoto

    }

    const newProperty = new PostProperty(prop);

    try {
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};


// Homepage, Books
export const getBooks = async (req, res) => {
    try {
        const postBooks = await PostBook.find();

        res.status(200).json(postBooks);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createBook = async (req, res) => {

    const book = {  
        bookName: req.body.bookName,
        bookAuthor: req.body.bookAuthor,
        bookLink: req.body.bookLink,
        bookPhoto: req.body.bookPhoto
    };


    const newBook = new PostBook(book);

    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};


// Dispo Table/Properties

export const getDispoProps = async (req, res) => {
    try {
        const postDispoProperties = await PostDispoProperty.find();

        res.status(200).json(postDispoProperties);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createDispoProp = async (req, res) => {

    const dispoProp = {  
        name: req.body.name,
        address: req.body.address,
        buyer: req.body.buyer,
        doubleEscrow: req.body.doubleEscrow,
        titleCompany: req.body.titleCompany,
        titleOfficer: req.body.titleOfficer,
        titleEmail: req.body.titleEmail,
        titlePhone: req.body.titlePhone,
        signersName: req.body.signersName,
        vesting: req.body.vesting,
        contractPricing: req.body.contractPricing,
        emd: req.body.emd,
        closing: req.body.closing,
        coe: req.body.coe,
        closeSooner: req.body.closeSooner,
        contractExecuted: req.body.contractExecuted,
        buyersPhone: req.body.buyersPhone,
        emailDocusign: req.body.emailDocusign

    }

    const newDispoProperty = new PostDispoProperty(dispoProp);

    try {
        await newDispoProperty.save();
        res.status(201).json(newDispoProperty);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};


// Announcement Form/Homepage

export const getAnnouncements = async (req, res) => {
    try {
        const postAnnouncement = await PostAnnouncement.find();

        res.status(200).json(postAnnouncement);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createAnnouncement = async (req, res) => {

    const announcement = {  
        title: req.body.title,
        description: req.body.description,
        name: req.body.name,
        department: req.body.department,
        date: req.body.date
    };


    const newAnnouncement = new PostAnnouncement(announcement);

    try {
        await newAnnouncement.save();
        res.status(201).json(newAnnouncement);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};



// Markers


export const getMarkers = async (req, res) => {
    try {
        const postMarkers = await PostMarker.find();

        res.status(200).json(postMarkers);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createMarker = async (req, res) => {

    const marker = {  
        address: req.body.address,
        lat: req.body.lat,
        lng: req.body.lng,
        arv: req.body.arv,
        salePrice: req.body.salePrice,
        beds: req.body.beds,
        baths: req.body.baths,
        parking: req.body.parking,
        pool: req.body.pool,
        livingArea: req.body.livingArea,
        lotSize: req.body.lotSize,
        year: req.body.year,
        pictureLink: req.body.pictureLink,
        market: req.body.market,
        propPhoto: req.body.propPhoto
    };


    const newMarker = new PostMarker(marker);

    try {
        await newMarker.save();
        res.status(201).json(newMarker);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};



// Referrals

export const getReferrals = async (req, res) => {
    try {
        const postReferrals = await PostReferral.find();

        res.status(200).json(postReferrals);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createReferral = async (req, res) => {

    const referral = {  
        employeeName: body.req.employeeName,
        refName: body.req.refName,
        refNumber: body.req.refNumber,
        refEmail: body.req.refEmail,
        department: body.req.department
    };


    const newReferral = new PostReferral(referral);

    try {
        await newReferral.save();
        res.status(201).json(newReferral);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};