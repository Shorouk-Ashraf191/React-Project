import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'
import {Form} from 'react-bootstrap'
import { FaFacebookF , FaLinkedinIn , FaInstagram} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Footer(){
    return(
        <>
        <section className='footer' id="footer">
            <div className='footer-style'>
                <div className='footer-data'>
                    <p>See My Projects At Once & Leave Here Your E-mail Address</p>
                </div>
                <div>
                    <Form>
                        <Form.Control placeholder='E-mail Address' className='email'></Form.Control>
                    </Form>
                </div>
                <button>submit</button>
            </div>
            <div className='icons'>
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/shorouk-ashrf-b30b4324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='social'><FaLinkedinIn/></Nav.Link>
                    <Nav.Link href="https://www.facebook.com/profile.php?id=100004841059304&mibextid=ZbWKwL" className='social'><FaFacebookF/></Nav.Link>
                    <Nav.Link href="https://instagram.com/_shorouk_ashrf191?igshid=OGQ5ZDc2ODk2ZA==" className='social'><FaInstagram/></Nav.Link>
                </Nav>
                <p>By Shorouk Ashraf Kamal</p>
            </div>
        </section>
        </>
    );
}export default Footer;