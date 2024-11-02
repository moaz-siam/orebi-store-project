import { Route , Routes } from 'react-router-dom';
import './App.css';
import Header from './components/home/Header/Header';
import HeaderBottom from './components/home/Header/HeaderBottom';
import Footer from './components/home/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Offer from './pages/Offer/Offer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Journals from './pages/Journals/Journals';
import Shop from './pages/Shop/Shop';
import ProductDetails from './components/home/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import SignIn from './pages/Account/SignIn';
import SignUp from './pages/Account/SignUp';
const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      {/* <ScrollRestoration />  with router */} 
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} ></Route>
        <Route  element={<Offer />} path='/offer' ></Route>
        <Route  element={<About />} path='/about' ></Route>
        <Route  element={<Contact />} path='/contact' ></Route>
        <Route  element={<Journals />} path='/journal' ></Route>
        <Route  element={<Shop />} path='/shop' ></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

      </Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
