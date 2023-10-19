import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Transits from '../services/Transits';
import Exports from '../services/Exports';
import Imports from '../services/Imports';
import Btp from '../services/Btp';
import Consultation from '../services/Consultation';
import LayoutNav from './LayoutNav';
import Probtp from '../produits/Probtp';
import Proimporexpor from '../produits/Proimporexpor';
import Protransport from '../produits/Protransport';
import Errors from './Errors';
import '../style/pages.css';
import Contacts from '../pages/Contacts';

const NavDirection = () => {
  return (
    <Routes>

      <Route element={<LayoutNav />}>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="/import" element={<Imports />} />
        <Route path="/export" element={<Exports />} />
        <Route part="/Transit" element={<Transits />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/btp" element={<Btp />} />

        <Route path="/produits_btp" element={<Probtp />} />
        <Route path="/produits_import_export" element={<Proimporexpor />} />
        <Route path="/produits_transport" element={<Protransport />} />


      </Route>
      <Route path="*" element={<Errors />} />
    </Routes>
  )
}

export default NavDirection
