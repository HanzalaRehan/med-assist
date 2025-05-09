import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Left Section */}
      <div style={styles.columnSection}>
        <h3 style={styles.title}>At-Home Healthcare</h3>
        <p>Contact: +92-303-0598767</p>
      </div>

      {/* Middle Section (Links Inline) */}
      <div style={styles.rowSection}>
        <a href="#" style={styles.link}>Contact Us</a>
        <a href="#" style={styles.link}>About Us</a>
        <a href="#" style={styles.link}>Legal</a>
        <a href="#" style={styles.link}>Careers</a>
      </div>

      {/* Right Section (Icons Inline) */}
      <div style={styles.rowSection}>
        <a href="#" style={styles.icon}><FaFacebookF /></a>
        <a href="https://www.instagram.com/medassistservices?igsh=NmRvcHdvODlrYzd3" style={styles.icon}><FaInstagram /></a>
        <a href="#" style={styles.icon}><FaLinkedinIn /></a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
    background: '#f2f2f2',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  columnSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    justifyContent: 'center',
    height: '100%',
  },
  rowSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '14px',
  },
  icon: {
    fontSize: '18px',
    color: '#333',
    textDecoration: 'none',
  },
};

export default Footer;
