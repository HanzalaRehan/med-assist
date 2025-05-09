import React from 'react';
import { FaUserCircle } from 'react-icons/fa';


function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Left: Logo */}
      <div>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
      </div>


      {/* Center: MedAssist */}
      <h1 style={styles.brand}>
        <span style={styles.med}>Med</span>
        <span style={styles.assist}>Assist</span>
      </h1>

      {/* Right: Profile Icon */}
      <a href="#" style={styles.icon}>
        <FaUserCircle />
      </a>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#f9f9f9',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#999',
  },
  brand: {
    fontSize: '24px',
    margin: 0,
    fontWeight: 'bold',
  },
  med: {
    color: '#3B82F6',
  },
  assist: {
    color: '#34D399',
  },
  icon: {
    fontSize: '28px',
    color: '#333',
    textDecoration: 'none',
  },
};

export default Navbar;
