import GoogleMapReact from 'google-map-react';
import { keyframes } from 'styled-components';
import { MapDiv, LeftDiv, Page, KeygleeLogo, LogoDiv, Img } from './styles';
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api';
import { useState } from 'react';
import { nominalTypeHack } from 'prop-types';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import LeftPanel from './LeftPanel/LeftPanel';
import { useDispatch } from 'react-redux';
import { getMapProps } from '../../../actions/properties';
import { useEffect } from 'react';
import Markers from './LeftPanel/Markers';

import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid' //For Keys

import dotenv from 'dotenv';
dotenv.config({
    path: `${__dirname}./Map/.env.local`
})



const libraries = ["places"];
const center = {
    lat: 33.257,
    lng: -111.884
};




const Map = ({ key, style }) => {



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMapProps());
    },[dispatch])

    const onLoad = marker => {
        console.log('marker: ', marker)
    }


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyDZO4-fjim18Q-HauZlwCvMCpZ_HUPjWA8',
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <MapDiv>
            <LeftDiv>
                <LeftPanel />
            </LeftDiv>
            <GoogleMap mapContainerStyle={style.map} zoom={11} center={center} onClick={(e) => {console.log(e)}} > 
                <Markers onLoad={onLoad} />
            </GoogleMap>
        </MapDiv>
    ) 

}

Map.defaultProps = {
    style: {
        loadscript: {
            display: 'none',
        },
        map: {
            width: '80%',
            height: '92vh',
            marginTop: '0.5em'
        },
        body: {
            backgroundColor: 'blue',
            width: '100%',
            height: '80em',
            position: 'fixed',
            top: '.1em'
        }
    },
    key: 'AIzaSyDZO4-fjim18Q-HauZlwCvMCpZ_HUPjWA8'
}

export default Map
