import styled from 'styled-components'

export const Navbar = styled.nav`
    display: flex;
    background-color: #32424c4f;
    overflow: hidden;
    align-items: center;
    height: 70px;
    padding-bottom: 6px;
    border-bottom: 1px solid white;
    position: absolute;
    width: 100%;

    @media only screen and (min-width: 768px) {

    }
`;

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
`;

export const Title = styled.h1`
    color: white;
    font-size: 2em;
    font-style: italic;
    font-weight: bold;
`;

export const DivLinks = styled.div`
    display: flex;
    justify-conent: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: row;
    margin: 1em;
`;

export const NavLinks = styled.a`
    color: white;
    margin: 1em;
    z-index: 1;

    &:hover {
        color: red;
        cursor: pointer;
    }
`;

export const Logo = styled.img`
position: absolute;
bottom: .3em;
`