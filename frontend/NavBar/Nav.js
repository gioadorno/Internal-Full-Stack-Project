import { Navbar, TitleDiv, Title, DivLinks, NavLinks, Logo} from './styles'

import logo from '../Images/Keyglee_Logo.png'

const Nav = ({ links, company, navLinks, formTitle }) => {

    return (
        <Navbar>
            <TitleDiv>
                <Title>
                    {company}
                <Logo src={logo} height={50} width={70} />
                </Title>
                
            </TitleDiv>
            <DivLinks>
                <NavLinks href={links.link}>
                    {navLinks.home}
                </NavLinks>
                <NavLinks href={links.link}>
                    {navLinks.properties}
                </NavLinks>
                <NavLinks href={links.link}>
                    {navLinks.careers}
                </NavLinks>
            </DivLinks>
        </Navbar>
    )
}

Nav.defaultProps = {
    company: 'Keyglee Dispo',
    formTitle: 'Property Form',
    navLinks : {
        home: 'Home',
        properties: 'Properties',
        careers: 'Careers'
    },
    links: {
        link: '#'
    }
}

export default Nav
