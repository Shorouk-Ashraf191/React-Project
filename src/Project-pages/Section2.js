import React from 'react'
import './Projects.css'
import { Col , Row , Form , Image} from 'react-bootstrap'
import fphoto from '../Images/fphoto.png'

function Section2(){
    return(
        <>
            <section className='form-style' id="section2">
                <div className='img'>
                    <Image src={fphoto} />
                </div>
                <div className='data'>
                    <h1 style={{textShadow:"none"}}>Keep In Touch</h1>
                    <Form>
                        <Row style={{rowGap:"20px"}}>
                            <Col xl='6' xs='12'>
                                <Form.Control placeholder='First Name : ' className='input-data'></Form.Control>
                            </Col>
                            <Col xl='6' xs='12'>
                                <Form.Control placeholder='Last Name : ' className='input-data'></Form.Control>
                            </Col>
                            <Col xl='6' xs='12'> 
                                <Form.Control placeholder='Your Email :  ' className='input-data'></Form.Control>
                            </Col>
                            <Col xl='6' xs='12' >
                                <Form.Control placeholder='Phone Number :  ' className='input-data'></Form.Control>
                            </Col>
                            <Col xl='12' xs='12'>
                            <Form.Control as="textarea" rows={6} placeholder='Your Message...'  className='msg-input'/>
                            </Col>
                            <Col> 
                                <input type="submit" className='btn-submit' />
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
        </>
    );
}
export default Section2;