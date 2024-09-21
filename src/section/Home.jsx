import React from 'react';
import ControlledAccordions from '../component/Accordion';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Sec1About from '../component/Sec1About';
import Sec1Home from '../component/Sec1Home';
import Sec1Pricing from '../component/Sec1Pricing';
import Sec1Services from '../component/Sec1Services';
import Sec2Home from '../component/Sec2Home';
import Sec2Services from '../component/Sec2Services';
import Sec3Services from '../component/Sec3Services';
import Sec4Services from '../component/Sec4Services';
import Sec5Services from '../component/Sec5Services';
import Sec6Services from '../component/Sec6Services';
import SecAccordion from '../component/SecAccordion';
import SecTeam from '../component/SecTeam';

export default ()=>{
    return(<>
    <Navbar/>
    <Sec1Home/>
    <Sec2Home/>
    <Sec1About/>
    <Sec1Services/>
    <Sec2Services/>
    <Sec3Services/>
    <Sec4Services/>
    <Sec5Services/>
    <Sec6Services/>
    <Sec1Pricing/>
    <SecTeam/>
    <SecAccordion/>
    <Footer/>
    </>)
}