import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Images from './Pages/Images';
import Nature from './Pages/Nature';
import Animal from './Pages/Animal';
import Sea from './Pages/Sea';
import Children from './Pages/Children';
import Flower from './Pages/Flower';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/images' element={<Images/>}/>
        <Route path='/Nature' element={<Nature/>}/>
        <Route path='/animal' element={<Animal/>}/>
        <Route path='/sea' element={<Sea/>}/>
        <Route path='/children' element={<Children/>}/>
        <Route path='/flower' element={<Flower/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Cart' element={<Cart/>}/>
       <Route path='/LoginSignup' element={<LoginSignup/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
