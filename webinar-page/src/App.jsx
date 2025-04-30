import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import PopularWebinars from './components/PopularWebinars';
import Navbar from './components/Navbar';
import ContactAgent from './components/ContactAgent';
import Footer from './components/Footer';
import WebinarDetail from './pages/WebinarDetail';
import AllWebinars from './pages/AllWebinars';
import WebinarAdmin from './pages/WebinarAdmin'; // <-- new page
import { WebinarContext } from './context/WebinarContext';

import './index.css';

function HomePage() {
  const { webinars } = useContext(WebinarContext); // <-- use shared context
  const [filters, setFilters] = useState({ country: '', city: '' });

  const handleSearch = (country, city) => {
    setFilters({ country, city });
  };

  const filteredWebinars = webinars.filter((webinar) => {
    const matchCountry = filters.country ? webinar.country === filters.country : true;
    const matchCity = filters.city ? webinar.city === filters.city : true;
    return matchCountry && matchCity;
  });

  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchSection onSearch={handleSearch} />
      <PopularWebinars webinars={filteredWebinars} />
      <ContactAgent />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/webinar/:id" element={<WebinarDetail />} />
        <Route path="/webinars" element={<AllWebinars />} />
        
        <Route path="/admin/webinars" element={<WebinarAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
