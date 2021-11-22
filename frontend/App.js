import Body from "./Components/routes/Home/Body/Body";
import Nav from "./Components/NavBar/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  AcqTable  from './Components/routes/AcqTable/AcqTable';
import Map from "./Components/routes/Map/Map";
// import Footer from "./Components/Footer/Footer";
// import { Fade } from 'react-slideshow-image';
import './Components/routes/Home/Body/styles.css'
// import { PageBody, Img, SlideShow, Logo } from "./Components/routes/Home/Body/styles";
import { useState } from "react";
import DispoTable from "./Components/routes/DispoTable/DispoTable";
import AnnouncementBody from "./Components/routes/AnnouncementForm/AnnouncementBody";

// Images
import home1 from './Components/routes/Home/Body/Images/house-2469110_1920.jpg';
import home2 from './Components/routes/Home/Body/Images/house-1867187_1920.jpg';
import home3 from './Components/routes/Home/Body/Images/house-961401_1920.jpg';
import home4 from './Components/routes/Home/Body/Images/luxury-home-2409518_1920.jpg';
import home5 from './Components/routes/Home/Body/Images/house-3362676_1920.jpg';
import home6 from './Components/routes/Home/Body/Images/house-2511060_1920.jpg';

const fadeImages = [
    {
        url: home1,
        caption: 'Photo by paulbr75'
    },
    {
        url: home2,
        caption: 'Photo by Pexels'
    },
    {
        url: home3,
        caption: 'Photo by ErikaWittlieb'
    },
    {
        url: home4,
        caption: 'Photo by paulbr75'
    },
    {
        url: home5,
        caption: 'Photo by ErikaWittlieb'
    },
    {
        url: home6,
        caption: 'Photo by ErikaWittlieb'
    }
];

const App = () => {

    const [autoplay, setAutoplay] = useState(true);

    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' exact element={<Body />} />
                    <Route path='/acqTable' exact element={<AcqTable />} />
                    <Route path='/map' exact element={<Map />} />
                    <Route path='/dispotable' exact element={<DispoTable />} />
                    <Route path='/announcementform' exact element={<AnnouncementBody />} />
                </Routes>

            </Router>
        </>
    )
}


const fadeStyle = {
    width: '100%',
    height: '100%',
    zIndex: '-1',
    position: 'fixed'
};

export default App
