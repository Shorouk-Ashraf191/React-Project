import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import './Projects.css'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Projects(){
    return(
        <>
        <section className='projects-style' id="projects">
            <h1>My Projects</h1>
            <h5>You can see my projects here</h5>
                <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="tabs"
                justify
                >
                    <Tab eventKey="1st section" title="1st Section" id="tab">
                        <Section1/>
                    </Tab>
                    <Tab eventKey="2nd section" title="2nd Section" id="tab">
                        <Section2/>
                    </Tab>
                    <Tab eventKey="3rd section" title="3rd Section" id="tab">
                        <Section3/>
                    </Tab>
                </Tabs>

        </section>
        </>
    );
}
export default Projects;