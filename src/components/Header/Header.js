import {Link, NavLink, useLocation} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from "react-bootstrap";
import CompactLogo from '../../assets/LogoUnimiibo/unimiibo_logo_compact.png';
import FullLogo from '../../assets/LogoUnimiibo/unimiibo_logo_small.png';
import style from './Header.module.css';
import {useEffect} from "react";

function Header({navLinks}) {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Navbar collapseOnSelect expand="md">
                <Container fluid>
                    <Link className="navbar-brand ms-2 d-none d-md-block" to="/">
                        <img src={FullLogo} alt="Full-size logo Unimiibo" height="50"/>
                    </Link>
                    <Link className="navbar-brand d-md-none" to="/">
                        <img src={CompactLogo} alt="Icon logo Unimiibo" height="50"/>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.navButton}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mt-3 mt-md-0">
                            {navLinks.map((navLink, idx) => (
                                <Nav.Link
                                    key={idx}
                                    href={navLink.link}
                                    as={NavLink}
                                    to={navLink.link}
                                    className='nav-link mx-1 mx-lg-3 px-0 py-1 py-md-0'
                                    children={({isActive}) => (
                                        <span
                                            className={`d-inline-flex px-3 pb-1 pt-2 ${style.navLink} ${isActive ? style.navLinkActive : ''}`}>
                                            <i className={`bi ${isActive ? navLink.icon.active : navLink.icon.noActive} me-2`}></i>{navLink.name}
                                        </span>
                                    )}
                                />
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;