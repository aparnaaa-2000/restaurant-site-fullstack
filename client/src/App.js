// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import login from './pages/login';
import Loginpage from './pages/Loginpage';
import Registration from './pages/Registration';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
// import Cart from './components/Addfood';
// import Pasta from './components/Pasta';
// import Burgers from './components/Burgers';
import Addfood from './components/Addfood';
import Menubar from './components/Menubar';
import Singleview from './components/Singleview';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Payment from './components/Payment';
// import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/login' element={<Loginpage/>}/>
     <Route path='/registration' element={<Registration/>}/>
     <Route path='/' element={<Homepage/>}/>
     <Route path='/navbar' element={<Navbar/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/footer' element={<Footer/>}/>
     <Route path='/addfood' element={<Addfood/>}/>
    <Route path='/menu' element={<Menubar/>}/>
    <Route path='/singleview/:id' element={<Singleview/>}/>
    <Route path='/cart' element={<Cart/>}/> 
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/payment' element={<Payment/>} />
     {/* <Route path='/addfood' element={<Addfoo/>}/> */}
     {/* <Route path='/pasta' element={<Pasta/>}/> */}
     {/* <Route path='/burgerS' element={<Burgers/>} /> */}
    
    {/* <Route path='/login' element={<Signin/>}/> */}
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
