import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Imports from './Imports';
import Exports from './Exports';
import Consultation from './Consultation';
import Btp from './Btp';
import LayoutNav from './LayoutNav';
import About from '../About';
import CallUsForQuotes from '../CallUsForQuotes';
import Negoces from './Negoces';
import LayoutError from '../../Error/LayoutError';
import Errors from '../../Error/Errors';
import Oktransits from './Oktransition';
import Services from '../../Body/Services';
import TeamMembers from '../../Body/TeamMembers';
import Reasons from '../../Body/Reasons';

const Service = () => {
  return (
    <Routes>

      <Route element={<LayoutNav />}>
        <Route path="/about" element={<About />} />
        <Route path="/CallUsForQuotes" element={<CallUsForQuotes />} />

        <Route path="/import" element={<Imports />} />
        <Route path="/export" element={<Exports />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/btp" element={<Btp />} />
        <Route path="/negoces" element={<Negoces />} />
        <Route path="/op_transit" element={<Oktransits />} />
        <Route path="/teams" element={<TeamMembers />} />
        <Route path="/strengths" element={<Reasons />} />
        <Route path="/services" element={<Services />} />

      </Route>
      <Route element={<LayoutError />}>
        <Route path="*" element={<Errors />} />
      </Route>

    </Routes>
  )
}

export default Service;
