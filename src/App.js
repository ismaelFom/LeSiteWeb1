import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavDirection from './navdirection/NavDirection';
import Accueil from './navabar/Accueil';
import AutresComponent from './navbarPlus/AutresComponent';


const App = () => {
  return (
    <BrowserRouter>
        <Accueil />
      <Routes>
        <Route exact path="/" element={<AutresComponent />} />
        <Route path="/*" element={<NavDirection />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
