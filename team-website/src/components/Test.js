import React from 'react';

const ImageTest = ({ imageUrl }) => {
  return (
    <div>
      <h2>Image Test</h2>
      <img src={imageUrl} alt="Test Image" />
    </div>
  );
};

export default ImageTest;
