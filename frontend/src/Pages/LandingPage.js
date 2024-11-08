import React from 'react';
import './LandingPage.css';
import Chatbot from './chatbot'; // Ensure the Chatbot component is imported with an uppercase "C"
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <div className='LandingPage-title'>
        CareerX
        <p className='LandingPage-desc'>Select a career of your interest</p>
      </div>

      <div className='LandingPage-buttons'>
        <Link to="/doctor" className='lp-buttons'>Doctor</Link>
        <Link to="/engineer" className='lp-buttons'>Engineer</Link>
        <Link to="/ca" className='lp-buttons'>Chartered Accountant</Link>
      </div>

      {/* Include the Chatbot component at the bottom */}
      <Chatbot/>
    </div>
  );
};

export default LandingPage;
