import { PageBody, SlideShow, Img, Logo } from "./styles";
import { useState } from "react";

import TopRow from "./TopRow/TopRow";
import SecondRow from "./SecondRow/SecondRow";
import Footer from "../../../Footer/Footer";
import ThirdRow from "./ThirdRow/ThirdRow";


import { Fade } from 'react-slideshow-image';
import './styles.css';

// Images
import home1 from './Images/new-1572747_1920.jpg';
import home2 from './Images/house-1867187_1920.jpg';
import home3 from './Images/house-961401_1920.jpg';
import home4 from './Images/luxury-home-2409518_1920.jpg';
import home5 from './Images/house-3362676_1920.jpg';
import home6 from './Images/house-2511060_1920.jpg';
// import logo from './Images/Keyglee_Logo.png'

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
]

const Body = () => {

    const [autoplay, setAutoplay] = useState(true);

    return (
        <>
            <PageBody>
                <Fade autoplay={autoplay} style={fadeStyle} >
                        {fadeImages.map((fadeImage, index) => { return (
                        <div className="each-fade" key={index}>
                            <div className="image-container" >
                            <Img src={fadeImage.url} width={'100%'} height={1000}/>
                            </div>
                        </div>
                        )})}
                </Fade>
                <TopRow />
            </PageBody>
            <SecondRow />
            <ThirdRow />
            <Footer />
        </>
    )
}

const fadeStyle = {
    width: '100%',
    height: '120%',
    zIndex: '-1',
    position: 'fixed'
}

export default Body
