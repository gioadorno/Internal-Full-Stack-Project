import { PageBody, Img ,FilterDiv, FilterName, Filter} from "./styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form/Form";
import { FormButton } from "./styles";
import Footer from "../../../../Footer/Footer";

import Table from './Table/Table'

import { Fade } from 'react-slideshow-image';
import './styles.css';

// Images
import home1 from '../Images/new-1572747_1920.jpg';
import home2 from '../Images/house-1867187_1920.jpg';
import home3 from '../Images/house-961401_1920.jpg';
import home4 from '../Images/luxury-home-2409518_1920.jpg';
import home5 from '../Images/house-3362676_1920.jpg';
import home6 from '../Images/house-2511060_1920.jpg';

// import logo from '../Images/Keyglee_Logo.png'

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


    // Opens Acq Form
    const openForm = () => {
        document.querySelector('.form').style.display = 'flex';
        document.querySelector('.formButton').style.display = 'none';
    };





const Body = ({ buttonText, classes, filterName, text }) => {
    const props = useSelector((state) => state.posts)


    const [autoplay, setAutoplay] = useState(true);
    const [input, inputFilter] = useState('')

        // Filter Through Table



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
                <FormButton className={classes.formButton} onClick={openForm}>
                    {buttonText}
                </FormButton>
                <Table />
                <Form />
            </PageBody>
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

Body.defaultProps = {
    buttonText: 'Acq Form',
    classes: {
        formButton: 'formButton'
    },
    filterName : 'Table Search:',
    text: 'text'
}

export default Body
