import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import Service from './components/NavBarItems/services/Service';
import Oktransits from './components/NavBarItems/services/Oktransition';
import LayoutNav from './components/NavBarItems/services/LayoutNav';


const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/*" element={<Service />} />
        {/* <Route path="/Ok_transits" element={<Oktransits />} /> */}
        <Route element={<LayoutNav />}>
      <Route part="/Ok_transits" element={<Oktransits />} />
    </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
