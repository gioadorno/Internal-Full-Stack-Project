import styled from 'styled-components';

export const OuterTable = styled.div`
display: flex;
width: 100%;
height: 50em;
background-color: #606060a6;
z-index: 1;
position: initial;
justify-content: center;
align-items: center;
padding-bottom: 5em;
`

export const TitleDiv = styled.div`
display: flex;
position: absolute;
top: 4.5em;
align-items: center;
justify-content: center;
`

export const TableTitle = styled.h1`
color: white;
font-size: 2.3em;
font-style: monospace;
`

export const AcqTable = styled.table`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #00000000;
    justify-content: flex-start;
    box-shadow: 0px 0px 13px 1px #ffffff;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10em;
    overflow-x: auto;
    flex-wrap: wrap;
    align-content: flex-start;
`

export const THead = styled.thead`
height: 10%;
display: flex;
flex-direction: row;
box-shadow: 0px 0px 0px 1px white;
align-items: center;
position: relative;
`

export const HeaderRow = styled.tr`
display: flex;
border: 1px solid white;
width: 100%;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 5px 1px white;

`

export const Headers = styled.th`
display: flex;
width: 15em;
justify-content: center;
align-items: center;
height: 6em;
font-size: 1.4em;
font-family: monospace;
color: white;
border-right: 1px solid white;
`