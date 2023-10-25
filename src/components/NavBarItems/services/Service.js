import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Imports from './Imports';
import Exports from './Exports';
import Consultation from './Consultation';
import Btp from './Btp';
import LayoutNav from './LayoutNav';
import About from '../About';
import CallUsForQuotes from '../CallUsForQuotes';
import Errors from '../Errors';
import Oktransits from './Oktransition';

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
      <Route part="/op_transit" element={<Oktransits />} />

    </Route>
    <Route path="*" element={<Errors />} />
  </Routes>
  )
}

export default Service;