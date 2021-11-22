import express from 'express';

import { getProps, createProp, getBooks, createBook, createDispoProp, getDispoProps, getAnnouncements, createAnnouncement, getMarkers, createMarker, getReferrals, createReferral } from '../../controllers/props.js';

const router = express.Router();

router.post('/acqtable', createProp);
router.get('/acqtable', getProps);

router.post('/marker', createMarker);
router.get('/marker', getMarkers);

router.post('/dispotable', createDispoProp);
router.get('/dispotable', getDispoProps);

router.get('/map', getProps);


router.post('/', createBook);
router.get('/', getBooks);

router.post('/announcementform', createAnnouncement);
router.get('/announcementform', getAnnouncements);

router.post('/referral', createReferral);
router.get('/referral', getReferrals);

export default router;