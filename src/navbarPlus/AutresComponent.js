import React from 'react';
import BackToTop from './BackToTop ';
import Footer from '../pages/Footer';
import Facts from '../pages/Facts';
import About from '../pages/About';
import Reasons from '../pages/Reasons';
import Services from '../pages/Services';
import Quotes from '../pages/Quotes';
import Teams from '../pages/Teams';
import News from '../pages/News';
import Carousels from './Carousels';

const AutresComponent = () => {
  return (
    <div>
           <Carousels />
            <Facts />
            <About />
            <Reasons />
            <Services />
            <Quotes />
            <News />
            <Teams />
            <Footer />
            <BackToTop />
        </div >
    )
}

export default AutresComponent;
