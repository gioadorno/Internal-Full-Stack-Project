import styled from 'styled-components';

export const TBody = styled.tbody`
height: 10%;
margin-top: 2.2em;
display: flex;
flex-direction: row;
align-items: center;
position: relative;
`

export const TRow = styled.tr`
display: flex;
border: 1px solid white;
width: 100%;
justify-content: center;
align-items: center;
`

export const TD = styled.td`
display: flex;
width: 15em;
justify-content: center;
align-items: center;
height: 6em;
font-size: 1.4em;
font-family: monospace;
color: white;
border-right: 1px solid white;
font-style: italic;
overflow-x: auto;
text-align: center;
`

export const A = styled.a`
color: white;

&:hover {
    color: red;
}
`

export const FilterDiv = styled.div`
display: flex;
width: 30em;
flex-direction: row;
height: 4em;
position: absolute;
right: -2em;
top: 5.7em;
align-items: center;
`

export const FilterName = styled.h1`
font-size: 1.3em;
color: white;
z-index: 2;
margin-right: 1em;
font-family: emoji;
`

export const Filter = styled.input`
z-index: 2;
height: 2em;
width: 15em;
display: block;
`