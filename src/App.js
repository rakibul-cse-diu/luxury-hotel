import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Facilities from './components/Facilities/Facilities';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';
import NoPageFound from './components/NoPageFound/NoPageFound';
import Rooms from './components/Rooms/Rooms';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/facilities' element={<Facilities />}></Route>
        <Route path='/rooms' element={<Rooms />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='*' element={<NoPageFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
