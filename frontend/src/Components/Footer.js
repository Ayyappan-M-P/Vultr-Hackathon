import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>Disclaimer: Our model helps children explore career paths and qualifications needed, but its suggestions aren't mandates. We urge kids to seek mentorship, consider their interests, and make informed choices. This tool aims to raise awareness and guide decision-making, not dictate career paths</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  color: '#d37676'
};

export default Footer;
