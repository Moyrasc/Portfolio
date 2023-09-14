import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import SobreMi from './views/SobreMi';
import Proyectos from './views/Proyectos';
import Contacto from './views/Contacto';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-mi' element={<SobreMi/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
