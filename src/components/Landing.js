import React from 'react';

function Landing() {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>
            <span style={styles.med}>MED</span>
            <span style={styles.assist}>ASSIST</span>
        </h1>
        <p style={styles.subtitle}>
          Reliable, at-home medical care when you need it most.
        </p>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    backgroundImage: `url('/bg.jpg')`, // Or replace with an online image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '90%',
  },
  title: {
    fontSize: '64px',
    fontWeight: '900',
    letterSpacing: '4px',
    margin: 0,
    color: '#3B82F6',
  },
  med: {
    color: '#3B82F6',
  },
  assist: {
    color: '#34D399',
  },
  subtitle: {
    fontSize: '18px',
    marginTop: '20px',
    color: '#333',
  },
};

export default Landing;
