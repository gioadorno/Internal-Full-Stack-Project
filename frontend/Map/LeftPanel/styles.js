import styled from 'styled-components'

const size = {
    xs: '320px',
    sm: '768px',
    lg: '901px;'
};

const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    lg: `(min-width: ${size.lg})`,
}

export const InnerLeftPanel = styled.div`
display: flex;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
background-color: white;
flex-direction: column;
`

export const TopDiv = styled.div`
display: flex;
width: 100%;
height: 25%;
align-items: center;
justify-content: flex-start;
flex-direction: column;
border-bottom: solid 1px black;
position: relative;
`

export const TopHeaderDiv = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: row;
position: relative;
`

export const TopHeader = styled.h1`
color: black;
font-style: italic;
font-family: emoji;
font-size: 1.3em;
`

export const AddressDiv = styled.div`
display: flex;
height: 2em;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: row;
`

export const AddressBox = styled.input`
width: 75%;
height: 2em;
`

export const H2 = styled.h2`
@media only screen and ${device.sm} {
display: none;
};

@media only screen and ${device.lg}
display: block;
color: black;
font-family: monospace;
font-style: italic;
font-size: 1.7em;
position: relative;
top: .5em;
margin-bottom: 1em;
margin-top: 0

`

export const PropertyDiv = styled.div`
display: flex;
height: 100%;
width: 100%;
align-items: center;
flex-direction: row;
overflow-y: auto;
flex-wrap: wrap;
`
export const FilterDiv = styled.div`
display: flex;
height: 5em;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
position: relative;
margin-top: .5em;
`

export const FilterLabel = styled.label`
color: black;
font-size: 1.2em;
font-style: italic;
font-family: monospace;
font-weight: 520;
`

export const FilterInput = styled.input`
width: 60%;
height: 1em;
background-color: #00b2ff2e;
`

export const InfoDiv = styled.div`
display: flex;
border-box: 1px solid black;
align-items: center;
justify-content: flex-start;
flex-direction: column;
background-color: white;
width: 25em;
height: 35em;
`

export const PhotoBox = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Photo = styled.img`
width: 90%;
height: 80%;
border: 3px solid gray;
`

export const InfoAddress = styled.h1`
font-family: monospace;
font-size: 1.1em;
color: black;
text-align: center;
`

export const Info = styled.p`
font-family: monospace:
font-size: 1em;
color: black;
`

export const LabelDiv = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
margin-left: 1em;
height: 2em;
`

export const Label = styled.label`
font-size: 1.1em;
font-family: monospace;
font-weight: 550;
display: flex:
flex-direction: row;
`