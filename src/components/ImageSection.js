import React from 'react';

const ImageSection = ({ imageUrl, altText }) => {
  return (
    <div className="image-section">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default ImageSection;
