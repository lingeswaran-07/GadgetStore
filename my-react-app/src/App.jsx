import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Banner from './Banner';
import Home from './components/Home';
import Cart from './Cart';
import MobilesM from './components/MobilesM';
import SpeakersM from './components/SpeakersM';
import ChargersM from './components/ChargersM';
import WatchesM from './components/WatchesM';
import LaptopsM from './components/LaptopsM';
import GamingGadgetsM from './components/GamingGadgetsM';
import EarbudsM from './components/EarbudsM';
import Login from './components/Login';
import Signup from './components/Signup';
import Order from './Order';  // Import the Order component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const AppContent = ({ setShowLogin, setShowSignup }) => {
  const location = useLocation();
  const showBanner = location.pathname === '/';  // Show banner only on the home page

  return (
    <>
      <Header setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      <Search />
      {showBanner && <Banner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<MobilesM />} />
        <Route path='/speakers' element={<SpeakersM />} />
        <Route path='/chargers' element={<ChargersM />} />
        <Route path='/watches' element={<WatchesM />} />
        <Route path='/laptops' element={<LaptopsM />} />
        <Route path='/gaming' element={<GamingGadgetsM />} />
        <Route path='/earbuds' element={<EarbudsM />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />  {/* Add this route for the Order component */}
      </Routes>
      <ToastContainer />
      <Footer/>
    </>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <BrowserRouter>
      <AppContent setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      {showLogin && <Login onClose={() => setShowLogin(false)} setShowSignup={setShowSignup} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} setShowLogin={setShowLogin} />}
    </BrowserRouter>
  );
};

export default App;
