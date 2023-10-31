import React from 'react'
import Navbarcom from './Navbardata/Navbar'
import Home from './HomePage/Homepage'; 
import Skills from './SkillsPage/Skills';
import Projects from './Project-pages/Projects';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Footer from './FooterPage/Footer';
import Section1 from './Project-pages/Section1';
import Section2 from './Project-pages/Section2';
import Section3 from './Project-pages/Section3';

function App() {
  return(
    <>
    <BrowserRouter>
    <Navbarcom/>
    <Home/>
    <Skills/>
    <Projects/>
    <Routes>
      <Route path='/projects' element={<Projects/>} >
        <Route path='section1' element={<Section1/>} />
        <Route path='section2' element={<Section2/>} />
        <Route path='section3' element={<Section3/>} />
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;