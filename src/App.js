import React from 'react';
import Navbar from './components/Navbar';
import MainBody from './components/Landing';
import Footer from './components/Footer';
import Services from './components/Services';



function App() {
  return (
    <div>
      <Navbar />
      <MainBody />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
