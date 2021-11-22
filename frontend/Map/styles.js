import styled from 'styled-components';

export const MapDiv = styled.div`
display: flex;
flex-diection: row;
width: 100%;
height: 92%;
position: absolute;
background-color: #f0f8ff00;
`

export const LeftDiv = styled.div`
display: flex;
width: 20%;
height: 100%;
background-color: white;
border-right: 1px solid white;
align-items: center;
margin-top: .5em;

@media (max-width: 768px) {
    width: 30%
  }
`

export const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    width: 100%;
    height: 55em;
    overflow-y: hidden;
`

export const LogoDiv = styled.div`
display: flex;
width: 100%;
position: absolute;
height: 100%;
`

export const KeygleeLogo = styled.img`
position: relative;
bottom: 2em;
left: 24.5em;
width: 4em;
height: 4em;
z-index: 2;
`

export const InfoDiv = styled.div`
display: none;
border-box: 1px solid black;
align-items: center;
justify-content: flex-start;
flex-direction: column;
background-color: white;
width: 15em;
height: 20em;
`

export const PhotoBox = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Photo = styled.img`
width: 60%;
height: 100%;
border: 3px solid gray;
`

export const InfoAddress = styled.h1`
font-family: monospace:
font-size: 1.3em;
color: black;
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


