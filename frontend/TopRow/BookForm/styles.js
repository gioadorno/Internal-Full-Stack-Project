import styled from "styled-components";

export const OuterDiv = styled.div`
    display: none;
    width: 100%;
    height: 60em;
    background-color: #140e0e54;
    z-index: 3;
    position: absolute;
    justify-content: center;
    align-items: center;
`

export const InnerDiv = styled.div`
    display: flex;
    width: 80%;
    height: 95%;
    background-color: #ffffffd6;
    z-index: 1;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    overflow-y: auto;
    flex-direction: column;
`

export const TitleDiv = styled.div`
    display: flex;
    position: absolute;
    top: 1em;
    align-items: center;
    justify-content: center;
`

export const FormTitle = styled.div`
    color: black;
    font-size: 2.3em;
    font-style: monospace;
`

export const FormBody = styled.form`
    display: flex;
    position: relative;
    width: 90%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 10em;
`

export const InputBox = styled.div`
    display: flex;
    width: 70%;
    height: 10em;
    padding-bottom: 3em;
    background-color: white;
    box-shadow: 5px 5px 5px 7px gray;
    flex-direction: column;
    margin: 2em;
`

export const QuestionDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    width: 100%;
`

export const Question = styled.h1`
    color: black;
    font-size: 2em;
    font-style: italic;
    font-family: monospace;
    text-align: center;
    position: relative;
    top: 1px;
    text-decoration: underline;
`

export const DescriptionDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    width: 100%;
`

export const Description = styled.p`
    color: #80808096;
    position: relative;
    cursor: context-menu;
`

export const InputDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    width: 100%;
`

export const Input = styled.input`
    background-color: #00b9ff3b;
    height: 1.6em;
    position: relative;
    width: 85%;
    margin-top: .5em;
`

export const Select = styled.select`
    background-color: #00b9ff3b;
    height: 1.5em;
    position: relative;
    width: 85%;
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
    height: 3em;
    background-color: white;
    font-size: 1.3em;
    font-family: monospace;
    cursor: pointer;
    margin-bottom: 5em;

    &:hover {
        color: white;
        background-color: #1ee0ffb0;
    }
`

export const EmptyDiv = styled.div`
    display: block;
    height: 10em;
    width: 10em;
    position: relative;
`

export const TextArea = styled.textarea`
    width: 50em;
    height: 5em;
`

export const RadioDiv = styled.div`
    display: flex;
    width: 100%;
    height: 3.5em;
    flex-direction: row;
    justify-content: center;
`

export const RadioButtonDiv = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const RadioLabel = styled.div`
    font-family: monospace;
    font-size: 1.4em;
    margin-left: .4em;
    font-weight: 600;
`

export const RadioInput = styled.input`
    height: 1.3em;
    width: 1.3em;
`

export const ImageDiv = styled.div`
width: 100%;
height: 25em;
display: flex;
justify-content: center;
align-items: center;

`

export const Img = styled.img`
width: 60%;
height: 100%;
border: 3px solid gray;
`
