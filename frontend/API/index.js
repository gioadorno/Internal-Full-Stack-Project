import axios from 'axios';

const acqUrl = 'http://localhost:5002/acqtable';
const mapUrl = 'http://localhost:5002/map';
const homeUrl = 'http://localhost:5002/';
const dispoUrl = 'http://localhost:5002/dispotable';
const announcementUrl = 'http://localhost:5002/announcementform';
const markerUrl = 'http://localhost:5002/marker';
const referralUrl = 'http://localhost:5002/referral'

//Acq Table
export const getProps = () => axios.get(acqUrl);
export const createProp = (newProp) =>  axios.post(acqUrl, newProp);
export const createMarker = (newMarker) =>  axios.post(markerUrl, newMarker);


// Map
export const getMapProps = () => axios.get(mapUrl);
export const getMarkers = () => axios.get(markerUrl);

// Home
export const getHomeProps = () => axios.get(homeUrl);
export const getBooks = () => axios.get(homeUrl);
export const createBook = (newBook) => axios.post(homeUrl, newBook);

// Dispo Table
export const getDispoProps = () => axios.get(dispoUrl);
export const createDispoProp = (newDispoProp) =>  axios.post(dispoUrl, newDispoProp);

// Announcement Form
export const getAnnouncements = () => axios.get(announcementUrl);
export const createAnnouncement = (newAnnouncement) =>  axios.post(announcementUrl, newAnnouncement);

// Referral Form
export const getReferrals = () => axios.get(referralUrl);
export const createReferral = (newReferral) =>  axios.post(referralUrl, newReferral);