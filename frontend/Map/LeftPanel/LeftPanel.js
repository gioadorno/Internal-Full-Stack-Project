import { InnerLeftPanel, TopDiv, TopHeaderDiv, TopHeader, PropertyDiv, AddressDiv, AddressBox, H2, FilterDiv, FilterInput, FilterLabel } from "./styles"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import PropertyBox from "./PropertyBox/PropertyBox";
import { useState } from "react";
import { usePlacesWidget } from 'react-google-autocomplete';
import { v4 as uuidv4 } from 'uuid' //For Keys
import { useSelector } from "react-redux";
import $ from 'jquery';

const LeftPanel = ({ topHeader, typeText, placeholder, searchIconStyle, secondHeader, filterLabel, classes }) => {

    // Filter Function

$(document).ready(function() {
    $(".propertyFilter").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".propertyBox").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
});

const props = useSelector((state) => state.posts)

const [filter, setFilter] = useState('');




    const { ref } = usePlacesWidget({
        apiKey: 'AIzaSyDZO4-fjim18Q-HauZlwCvMCpZ_HUPjWA8',
        onPlaceSelected: (place) => {
            
        },
        options: {
            types: ["address"],
            componentRestrictions: { country: "us" },
        },
        });

        const [addressValue, setValue] = useState('');


    return (
        <InnerLeftPanel>
            <TopDiv>
                <TopHeaderDiv>
                    <LocationOnIcon />
                    <TopHeader>
                        {topHeader}
                    </TopHeader>
                </TopHeaderDiv>
                <AddressDiv>
                    <AddressBox ref={ref} onBlur={(e) => setValue( e.target.value )} type={typeText} placeholder={placeholder.address} /> 
                </AddressDiv>
                <FilterDiv>
                    <FilterLabel>
                        {filterLabel}
                    </FilterLabel>
                    <FilterInput className={classes.propertyFilter}/>
                </FilterDiv>
                <H2>{secondHeader}</H2>
            </TopDiv>
            <PropertyDiv className={classes.leftPanel}>
                <PropertyBox/>
            </PropertyDiv>
        </InnerLeftPanel>
    )
}

LeftPanel.defaultProps = {
    filter: 'filter',
    propertyBox: 'propertyBox',
    topHeader: 'AEM Real Estate Map',
    secondHeader: 'AEM Properties',
    typeText: 'text',
    filterLabel: 'Filter Through List',
    placeholder: {
        address: 'Search address on map'
    },
    searchIconStyle : {
        position: 'absolute',
        left: '12.8em',
        top: '6.82em',
    },
    classes: {
        leftPanel: 'leftPanel',
        propertyFilter: 'propertyFilter'
    }
}

export default LeftPanel
