import React from 'react';
import './Projects.css'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import one from '../Images/1.png'
import two from '../Images/2.png'
import three from '../Images/3.png'
import four from '../Images/4.png'
import five from '../Images/5.png'
import six from '../Images/6.png'
function Section1(){
    return(
        <>
        <section className='section1' id="section1">
            <Nav>
                <Container className='mt-4'>
                    <Row>
                        <Col xl='4' xs='8' className='item'>
                            <Nav.Link href={"https://shorouk-ashraf191.github.io/makeup-design/final.html"} className='imgstyle' style={{backgroundImage:`url(${one})`}}>
                                <div className='overlay'>
                                    <div className='data'>
                                        <h3>Makeup Store</h3>
                                        <p>Using: HTML CSS</p>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Col>
                        <Col xl='4' xs='8'  className='item sm-de'>
                            <Nav.Link href={"https://shorouk-ashraf191.github.io/Bohemian-decor-store/project2.html"} className='imgstyle' style={{backgroundImage:`url(${two})`}} >
                                <div className='overlay'>
                                    <div className='data'>
                                        <h3>Bohemian Store</h3>
                                        <p>Using: HTML CSS CSS3</p>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Col>
                        <Col xl='4' xs='8'  className='item' >
                            <Nav.Link href={"https://shorouk-ashraf191.github.io/Java-script-task/Task1.html"} className='imgstyle' style={{backgroundImage:`url(${three})`}}>
                                <div className='overlay'>
                                    <div className='data'>
                                        <h3>JavaScript Project</h3>
                                        <p>Using: HTML CSS JS</p>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Col>

                        <Col xl='4' xs='8'  className='item botton' >
                            <Nav.Link href={"https://shorouk-ashraf191.github.io/Bags-Store/project3.html"} className='imgstyle' style={{backgroundImage:`url(${four})`}}>
                                <div className='overlay'>
                                    <div className='data'>
                                        <h3>Bags Store</h3>
                                        <p>Using: HTML CSS Bootstrap</p>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Col>
                        <Col xl='4' xs='8'  className='item botton'>
                            <Nav.Link href={"https://shorouk-ashraf191.github.io/JS-project/login.html"} className='imgstyle' style={{backgroundImage:`url(${five})`}}>
                                <div className='overlay'>
                                    <div className='data'>
                                        <h3>Supplies Store</h3>
                                        <p>Using: HTML CSS Bootstrap JS</p>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Col>
                        <Col xl='4' xs='8'  className='item botton'>
                            <Nav.Link href={"https://shorouk-ashraf191.github.io/animation-design/animation.html"} className='imgstyle' style={{backgroundImage:`url(${six})`}}>
                                <div className='overlay'>
                                    <div className='data'>
                                        <h3>Animation Project</h3>
                                        <p>Using: HTML CSS </p>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </Nav>
        </section>
    </>
    );
}

export default Section1;