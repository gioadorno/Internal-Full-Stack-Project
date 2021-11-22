import { combineReducers } from "redux";
import posts from './posts';
import books from "./books";
import dispo from "./dispo";
import announcements from './announcements'
import markers from "./markers";
import referrals from "./referrals";

export default combineReducers({ 
    posts, books, dispo, announcements, markers, referrals
});

