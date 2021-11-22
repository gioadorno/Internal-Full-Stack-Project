import styled from 'styled-components';

// Styling for Employee Referral Row

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
    overflow-x: hidden;
    align-items: center;
    flex-wrap: wrap;
`

export const RefForm = styled.form`
display: flex;
flex-direction: column;
overflow-y: auto;
justify-content: flex-start;
align-items: center;
width: 40%;
height: 100%
`

export const FormTitle = styled.h1`
color: white;
font-size: 1.6em;
font-weight: 550;
text-align: center;
`

export const InputDiv = styled.div`
display: flex;
flex-direction: column;
width: 80%;
height: 15%;
align-items: center;
`

export const Question = styled.h1`
font-size: 1.6em;
font-family: monospace;
color: white;
width: 100%;
text-align: center;
margin-top: 2em;
margin-bottom: 1em;
letter-spacing: .1em;
`
export const Input = styled.input`
width: 70%;
height: 1.5em;
z-index: 2;
`

export const RightDiv = styled.div`
display: flex;
flex-direction: column;
overflow-y: auto;
justify-content: flex-start;
align-items: center;
width: 60%;
height: 100%;
background-color: #93cdff8c;
border-left: 1px solid white;
`

export const RightTitle = styled.h1`
color: white;
font-size: 2em;
font-weight: 550;
text-align: center;
text-decoration: underline;
`

export const Department = styled.li`
color: white;
font-size: 1.5em;
font-style: italic;
font-family: emoji;
text-align: left;
width: 100%;
margin-left: 4em;
margin-bottom: .7em;
`

export const Position = styled.li`
color: white;
font-size: 1.3em;
font-style: italic;
font-family: emoji;
text-align: left;
width: 100%;
margin-left: 7em;
list-style: circle;
`

export const Select = styled.select`
    background-color: white;
    height: 1.5em;
    position: relative;
    width: 80%;
    margin-top: .5em;
`

export const ButtonDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3em;
`

export const Button = styled.button`
    width: 13em;
    height: 2.5em;
    background-color: white;
    font-size: 1.3em;
    font-family: monospace;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: #1ee0ffb0;
    }
`

export const EmptyDiv = styled.div`
    display: block;
    height: 3em;
    width: 10em;
    position: relative;
`

export const Error = styled.p`
color: red;
display: none;
width: 100%;
text-align: center;
font-weight: 550;
font-size: 1em;
margin-top: 0;
font-style: italic;
font-family: emoji;
justify-content: center;
z-index: -2
`
