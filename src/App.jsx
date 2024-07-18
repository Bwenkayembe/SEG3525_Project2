import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // Ensure this import if using index.css for global styles
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Title from './components/Title/Title';
import ContactUs from './components/ContactUs/contact'; // Correct the import path
import Footer from './components/Footer/Footer';
import Awareness from './pages/Awareness/Awareness';
import Boycott from './pages/Boycott/Boycott';
import Donations from './pages/Donations/Donations';
import More from './pages/More/More';
import Action from './pages/Action/Action'; // Ensure you import Action component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
