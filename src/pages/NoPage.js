import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
const NoPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar/>
      <div className='nopage container'>
        <img src='imgs/nopage.gif' alt="loading"/>
        <h1>No Page</h1>
        <span>Sorry, but it appears that this page doesn't exist or it has been removed by <a href='https://t.me/UpCoder'>UpCoder</a></span>
        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>
      </div>
      <Footer/>
    </div>
  );
};

export default NoPage;
