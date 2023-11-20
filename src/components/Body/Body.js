import React from 'react';
import About from '../NavBarItems/About';
import Reasons from './Reasons';
import BackToTop from './BackToTop ';
import Carousels from './Carousels';
import CallUsForQuotes from '../NavBarItems/CallUsForQuotes';
import Footer from '../Footer/Footer';
import Services from './Services';
import TeamMembers from './TeamMembers';
import Facts from './Facts';
import Btnwhatsapp from '../Error/Btnwhatsapp';


const Body = () => {
  return (
    <div>
           <Carousels />
            <Facts />
            <About />
            <Reasons />
            <Services />
            <CallUsForQuotes />
            <TeamMembers />
            <Footer />
            <Btnwhatsapp />
            <BackToTop />
        </div >
    )
}

export default Body;
