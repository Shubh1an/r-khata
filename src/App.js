import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {

  return (
    <div className="App">
      <Routes>
    <Route path= "/" element={<MainPage/>} />
    <Route path='privacy-policy'element={<PrivacyPolicy/>} />
    </Routes>
    </div>
  );
}

export default App;
