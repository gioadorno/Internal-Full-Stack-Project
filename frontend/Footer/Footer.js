import { Footerbar, Link } from "./styles"

const Footer = ({ link, href }) => {
    return (
        <Footerbar>
            <Link href={href.gms}>{link.gms}</Link>
            <Link href={href.timeOff}>{link.timeOff}</Link>
            <Link href={href.ticket}>{link.ticket}</Link>
            <Link href={href.close}>{link.close}</Link>
            <Link href={href.training}>{link.training}</Link>
            <Link href={href.podio}>{link.podio}</Link>
        </Footerbar>
    )
}

Footer.defaultProps = {
    link: {
        gms: 'GMS Portal',
        timeOff: 'Time Off Request',
        ticket: 'IT Support',
        close: 'Close',
        training: 'Training Materials',
        podio: 'Podio'
    },
    href: {
        gms: 'https://gms.prismhr.com/gms/auth/#/login?lang=en',
        timeOff: 'https://327291.tcplusondemand.com/app/webclock/#/EmployeeLogOn/137-04018/4018',
        ticket: 'https://theglobalsystemsolutions.itclientportal.com/ClientPortal/Login.aspx?returnURL=%2fClientPortal%2fLandingPage%2fLandingPage.aspx',
        close: 'https://app.close.com/login/',
        training: '#',
        podio: 'https://podio.com/login?force_locale=en_US'
    }
}

export default Footer
