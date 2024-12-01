import React from 'react';
import './footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="container-full-width"> 
        <p>&copy; {new Date().getFullYear()} Duet Transit Tracker</p>
      </div>
    </footer>
  );
};

export default Footer;


