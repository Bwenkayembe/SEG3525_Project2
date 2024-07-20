import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Title from './components/Title/Title';
import ContactUs from './components/ContactUs/contact';
import Footer from './components/Footer/Footer';
import Awareness from './pages/Awareness/Awareness';
import Boycott from './pages/Boycott/Boycott';
import Donations from './pages/Donations/Donations';
import More from './pages/More/More';
import Action from './pages/Action/Action';

const App = () => {
  const location = useLocation();

  // Check if the current path is the home page
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Navbar />
      {isHomePage && <Header />}
      <Routes>
        <Route exact path="/" element={
          <div className="container">
            <Home />
            <Title subTitle='Contact Us' title='Reach Out to Us, Express your thoughts' />
            <ContactUs />
          </div>
        } />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/boycott" element={<Boycott />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/more" element={<More />} />
        <Route path="/action" element={<Action />} />
      </Routes>
      {isHomePage && <Footer />}
    </div>
  );
}

export default App;
