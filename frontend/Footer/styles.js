import styled from 'styled-components'

export const Footerbar = styled.footer`
    display: flex;
    background-color: #000000ba;
    overflow-x: hidden;
    align-items: center;
    height: 6em;
    border-top: 1px solid white;
    position: initial;
    width: 100%;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: space-evenly;
`

export const Link = styled.a`
    color: white;
    z-index: 1;
    font-style: italic;
    font-family: emoji;
    font-size: 1.2em;

    &:hover {
    color: red;
    cursor: pointer;
}
`