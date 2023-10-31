import React from 'react'
import "./Homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image} from 'react-bootstrap';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import myphoto from "../Images/photo_2023-10-28_00-22-30-removebg-preview.png"
import { useTypewriter ,Cursor} from 'react-simple-typewriter';



function Home() {
    const [type] = useTypewriter({
        words: [' Frontend Developer','Backend Developer'],
        loop:{},
        typeSpeed:300,
        delaySpeed:100
    })
    return (
        <Container fluid className='Home-style' id="home">
            <section className='parent'>
                <div className='photo'>
                    <Image src={myphoto} className='myphoto'/>
                </div>

                <div className='info'>
                    <div className='welcome'><h2>Welcome all in my portfolio</h2></div>
                    <h1>Hi! I'm Shorouk </h1>
                    <h1>Ashraf kamal.</h1>
                    <h1>I'm <span className='type'> {type}</span><Cursor /></h1>
                    <p>Hello everyone!! I have 2 years experience in web development</p>
                    <a href='#'>Let's Connect <FaRegArrowAltCircleRight/></a>
                </div>

            </section>
        </Container>
    );
}
export default Home;
