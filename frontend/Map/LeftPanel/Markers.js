import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api';

import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid'; //For Keys
import { InfoDiv, PhotoBox, Photo, InfoAddress, Info, LabelDiv, Label } from './styles';
import { useEffect } from 'react';
import { getMarkers } from '../../../../actions/markers';
import icon from '../Icons/icons8-home-40.png'

const Markers = ({ labels, infoBox }) => {


    // Usings Markers in Database
    const markers = useSelector((state) => state.markers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMarkers());
    },[])


    // Open Info Box when clicking marker
    const openBox = () => {
        document.querySelector('.gm-style-iw-c').style.display = 'flex';
    }

    
    

    
    return (
        <>
                {markers.map((marker) => {
                    const latLng = {
                        lat: marker.lat,
                        lng: marker.lng
                    }
                    console.log(marker)
                    
                
                    return (
                    <>
                        <Marker icon={icon} key={uuidv4()} center={latLng} position={latLng} onClick={openBox}  />
                            <InfoWindow className={infoBox} key={uuidv4()} position={latLng}>
                                <InfoDiv key={uuidv4()}>
                                    <PhotoBox key={uuidv4()}>
                                        <Photo key={uuidv4()} src={marker.propPhoto}/>
                                    </PhotoBox>
                                    <LabelDiv key={uuidv4()}>
                                        <InfoAddress key={uuidv4()}>
                                            {marker.address.replace(', USA', '')}
                                        </InfoAddress>
                                    </LabelDiv>
                                    <LabelDiv key={uuidv4()}>
                                        <Label key={uuidv4()}>Wholesale: </Label>
                                        <Info key={uuidv4()}>{marker.salePrice}</Info>
                                    </LabelDiv>
                                    <LabelDiv key={uuidv4()}>
                                        <Label key={uuidv4()}>ARV: </Label>
                                        <Info key={uuidv4()}>{marker.arv}</Info>
                                    </LabelDiv>
                                    <LabelDiv key={uuidv4()}>
                                        <Label key={uuidv4()}>Employee: </Label>
                                        <Info key={uuidv4()}>{marker.name}</Info>
                                    </LabelDiv>
                                </InfoDiv>
                            </InfoWindow>
                    </>
                    )
                })}
            
        </>
    )
}

Markers.defaultmarkers = {
    infoBox: 'infoBox',
    infoBoxStyle: {
        display: 'none',
    },
    labels: {
        beds: 'Beds: ',
        baths: 'Baths: ',
        garage: 'Garage: ',
        pool: 'Pool: ',
        sqFoot: 'Sq. Foot: ',
        lotSize: 'Lot Size: ',
        year: 'Year Built: ',
        wholesale: 'Wholesale: ',
        arv: 'ARV: ',
        market: 'Market: ',
        employee: 'Employee: ',
        photos: 'Photos: '
    }
}

export default Markers
