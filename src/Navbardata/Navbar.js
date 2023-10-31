import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaFacebookF , FaLinkedinIn , FaInstagram} from "react-icons/fa";
import "./Navbar.css"

function Navbarcom () {
    return(
        <Navbar expand="lg" className="navbar" fixed="top">
        <Container className='container'>
          <Navbar.Brand href="#home" className='nav-brand' style={{color:"#fff"}}>Shorouk Ashraf</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0 nav-style" style={{ maxHeight: '150px' }} navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#footer">Footer</Nav.Link>
            </Nav>
            <div className='social-media'>
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/shorouk-ashrf-b30b4324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='social'><FaLinkedinIn/></Nav.Link>
                    <Nav.Link href="https://www.facebook.com/profile.php?id=100004841059304&mibextid=ZbWKwL" className='social'><FaFacebookF/></Nav.Link>
                    <Nav.Link href="https://instagram.com/_shorouk_ashrf191?igshid=OGQ5ZDc2ODk2ZA==" className='social'><FaInstagram/></Nav.Link>
                </Nav>
            </div>
            <button className='btn-conn'>Let's Connect</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navbarcom;