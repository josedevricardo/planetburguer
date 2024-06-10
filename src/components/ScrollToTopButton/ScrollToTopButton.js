import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{ ...buttonStyle, display: isVisible ? 'block' : 'none' }}
    >
      Subir
    </button>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px 20px',
  fontSize: '10px',
  cursor: 'pointer',
  backgroundColor: '#6f40d4',
  backgroundImage: 'url("https://i.ibb.co/Pg8R7GM/seta-subir.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  textAlign: 'center'
};

export default ScrollToTopButton;
