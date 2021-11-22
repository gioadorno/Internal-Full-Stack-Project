import styled from "styled-components";

export const OuterDiv = styled.div`
    display: flex;
    width: 100%;
    height: 55em;
    background-color: #140e0e54;
    z-index: 1;
    position: relative;
    flex-direction: row;
`

export const LeftDiv = styled.div`
display: flex;
width: 30%;
height: 100%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-right: 1px solid white;
background-color: #00000080;
`

export const LeftTitle = styled.h1`
color: white;
font-size: 2em;
font-family: emoji;
text-decoration: underline;
font-style: italic;
`

export const LeftBodyDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 90%;
overflow-y: auto;
margin-top: 1em;
`

export const BookDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 30em;
border-bottom: 1px solid white;

`

export const LeftImageDiv = styled.div`
display: flex;
width: 60%;
height: 75%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border: 1px solid white;
`

export const BookImage = styled.img`
width: 100%;
height: 100%;
`

export const BookTitle = styled.h1`
color: white;
font-size: 1.2em;
font-family: emoji;
font-style: italic;
margin-bottom: 0;
`

export const By = styled.p`
color: white;
font-size: .9em;
font-family: emoji;
font-style: italic;
margin-top: 0.4em;
margin-bottom: 0;
`

export const Author = styled.h1`
color: white;
font-size: 1em;
font-family: emoji;
font-style: italic;
margin-top: 0.4em;
margin-bottom: 1em;
`

export const BookLink = styled.a`
color: white;
font-size: 1.2em;
font-family: monospace;
margin-bottom: 1em;

&:hover {
    color: red;
    cursor: pointer;
}
`

export const BookButton = styled.button`
z-index: 2;
height: 2em;
width: 8em;
background-color: #00000080;
color: white;
position: absolute;
top: 4.5em;
display: block;

&:hover {
    color: white;
    background-color: #5becff;
    cursor: pointer
}
`


export const RightDiv = styled.div`
display: flex;
width: 70%;
height: 100%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: #d5d5d5bf;
`

export const RightTitle = styled.h1`
color: black;
font-size: 2.1em;
font-family: emoji;
text-decoration: underline;
font-style: italic;
`

export const RightInnerDiv = styled.div`
width: 100%;
height: 100%;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
overflow-y: auto;

`

export const PostDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 40%;
border-bottom: 1px solid black;
overflow-y: auto;
overflow-x: auto;
`

export const PostTitleDiv = styled.div`
display: flex;
flex-direction: row;
height: 15%;
width: 100%;
margin-right: 0;
justify-content: center;
align-items: baseline
`

export const PostTitle = styled.h1`
color: black;
font-size: 1.7em;
font-style: italic;
font-family: emoji;
width: 100%;
margin-left: .5em;
text-align: center;
`

export const Date = styled.p`
color: black;
font-size: 1em;
font-style: italic;
font-family: emoji;
position: relative;
width: 100%;
text-align: center;
margin-top: 0;
`

export const NameDiv = styled.div`
display: flex;
width: 100%;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
margin-bottom: 0;
`

export const Name = styled.p`
color: black;
font-size: 1em;
font-family: emoji;
position: relative;
width: 100%;
text-align: center;
font-weight: 550;
margin-bottom: .2em;
`

export const Market = styled.p`
color: black;
font-size: 1em;
font-style: italic;
font-family: emoji;
position: relative;
width: 100%;
text-align: center;
`

export const Post = styled.p`
color: black;
font-size: 1em;
font-style: italic;
font-family: emoji;
margin-top: 2em;
`