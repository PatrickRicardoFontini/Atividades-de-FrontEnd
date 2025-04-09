import React from 'react';
import './Gallery.css';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery-grid">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery ${index}`} />
      ))}
    </div>
  );
};

export default Gallery;