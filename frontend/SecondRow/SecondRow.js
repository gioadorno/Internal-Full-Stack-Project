import { OuterDiv, PropertyDiv, ImageDiv, Img, DetailDiv, LeftDiv, RightDiv, Title, Details, LabelDiv, Labels, Photos, Address } from './styles';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const SecondRow = ({ title, labels, details }) => {

    const props = useSelector((state) => state.posts);
    console.log(props)

    return (
        <OuterDiv>
            <Title>
                {title}
            </Title>
                {props.map((prop) => {
                    return (
                    <PropertyDiv key={uuidv4()}>
                        <ImageDiv key={uuidv4()} >
                            <Img key={uuidv4()} src={prop.propPhoto} />
                        </ImageDiv>
                        <Address key={uuidv4()}>
                        {prop.address.replace(', USA', '')}
                        </Address>
                        <DetailDiv key={uuidv4()} >
                            <LeftDiv key={uuidv4()} >
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.beds}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.beds}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.baths}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.baths}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.garage}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.parking}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.pool}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.pool}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.sqFoot}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.livingArea + details.sqft}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.lotSize}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.lotSize + details.sqft}
                                    </Details>
                                </LabelDiv>
                            </LeftDiv>
                            <RightDiv key={uuidv4()}>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.wholesale}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.salePrice}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.arv}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.arv}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.yearBuilt}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.year}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.market}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.market}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.employee}
                                    </Labels>
                                    <Details key={uuidv4()} >  
                                        {prop.name}
                                    </Details>
                                </LabelDiv>
                                <LabelDiv key={uuidv4()} >
                                    <Labels key={uuidv4()} >
                                        {labels.photos}
                                    </Labels>
                                    <Photos key={uuidv4()}  href={prop.pictureLink}>  
                                        {details.photos}
                                    </Photos>
                                </LabelDiv>
                            </RightDiv>
                        </DetailDiv>
                    </PropertyDiv>
                        )
                    })}
        </OuterDiv>

    )
}

SecondRow.defaultProps = {
    title: 'Properties',
    labels: {
        beds: 'Beds: ',
        baths: 'Baths: ',
        garage: 'Garage: ',
        pool: 'Pool: ',
        sqFoot: 'Sq. Foot: ',
        lotSize: 'Lot Size: ',
        year: 'Year Built: ',
        wholesale: 'Wholesale: ',
        yearBuilt: 'Year: ',
        arv: 'ARV: ',
        market: 'Market: ',
        employee: 'Employee: ',
        photos: 'Photos: '
    },
    details: {
        sqft: 'sqft',
        photos: 'Pictures'
    }
}

export default SecondRow
