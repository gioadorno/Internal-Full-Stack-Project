import styled from "styled-components";

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

export const SlideShow = styled.div`
    position: fixed;
    width: 100%;
    padding: 24px;
    box-shadow: 0 0 20px rgb(0 0 0 / 40%);
    z-index: 0;

`

export const Img = styled.img`
opacity: .5;
`

export const Logo = styled.img`
position: absolute;
top: 8em;
`

export const FormButton = styled.button`
    z-index: 2;
    height: 2.5em;
    width: 10em;
    background-color: white;
    position: absolute;
    left: 2em;
    top: 8em;
    display: block;

    &:hover {
        color: white;
        background-color: #5becff;
        cursor: pointer;
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

