import { useEffect, useRef, useMemo } from 'react';
import './Blob.css';

const BlobCursor = () => {
  const blobRef = useRef(null);
  const clickSound = useMemo(() => new Audio('/shutter.wav'), []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      
      if (blobRef.current) {
        blobRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
      }
    };

    const handleMouseDown = (event) => {
      if (!event.target.closest('a, button')) {
        clickSound.currentTime = 0; 
        clickSound.volume = 0.5; 
        
        clickSound.play().catch(err => {
          console.log("Audio playback interaction required.");
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [clickSound]);

  return (
    <>
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
    </>
  );
};

export default BlobCursor;