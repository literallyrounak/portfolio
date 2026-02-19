import { useEffect, useRef } from 'react';
import './Blob.css';

const BlobCursor = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      
      blobRef.current.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
    </>
  );
};

export default BlobCursor;