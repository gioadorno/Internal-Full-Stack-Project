import styled from "styled-components";

export const OuterDiv = styled.div`
    display: flex;
    width: 100%;
    height: 50em;
    background-color: #140e0ea6;
    z-index: 1;
    position: relative;
    border-top: 1px solid white;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: auto;
    align-items: center;
    flex-wrap: wrap;
`

export const Title = styled.h1`
color: white;
font-size: 2.2em;
font-style: italic;
font-family: emoji;
width: 100%;
text-align: center;
position: absolute;
top: 0;
`

export const PropertyDiv = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 50%;
border-right: 1px solid black;
align-items: center;
justify-content: flex-start;
`

export const ImageDiv = styled.div`
width: 100%;
height: 55%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 6em;
`

export const Img = styled.img`
width: 80%;
height: 100%;
border: 3px solid white;
`

export const DetailDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-top: .5em;
`

export const LeftDiv = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
`

export const RightDiv = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
`

export const LabelDiv = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
margin-left: 1em;
height: 2em;
text-align: center;
`

export const Labels = styled.label`
font-size: 1em;
font-family: monospace;
font-weight: 550;
display: flex:
flex-direction: row;
color: white;
`

export const Details = styled.p`
font-size: 1.1em;
font-family: monospace;
font-style: italic;
color: white;
text-align: center;
`

export const Photos = styled.a`
font-size: 1.1em;
font-family: monospace;
font-style: italic;
color: white;

&:hover {
    color: red;
}
`

export const Address = styled.p`
font-size: 1.1em;
font-family: monospace;
font-weight: 550;
text-align: center;
color: white;
`