import './TypographicEffect.scss';
import React, { useState, useEffect } from 'react';
import WavyLine from '/src/components/Atoms/WavyLine/WavyLine'

const TypographicEffect = () => {
  const [displaySentence, setDisplaySentence] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplaySentence(prevState => !prevState);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const resetSentence = () => {
    setDisplaySentence(true);
  };

  return (
    <div>
      <h1 className="display">Hi!<br /></h1>
      {displaySentence ? (
        <h1 className="display">
            My name is <span className="relative">ALEJANDRA<WavyLine/></span>
        </h1>
      ) : (
        <h1 className="display" onClick={resetSentence}>
            I'm a <span className="relative">Python<WavyLine/></span> developer
        </h1>
      )}
    </div>
  );
};

export default TypographicEffect;
