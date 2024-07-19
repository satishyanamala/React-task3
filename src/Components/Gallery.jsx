import React, { useState } from 'react';
import Thumbnail from './Thumbnail';

const Gallery = ({ imagesList }) => {
  const [currentImage, setCurrentImage] = useState(imagesList[0].imageUrl);

  const handleThumbnailClick = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="gallery">
      <div className="main-image">
        <img src={currentImage} alt="Current" className="current-image" />
        <h2>Nature images</h2>
      </div>
      <div className="thumbnails">
        {imagesList.map((image) => (
          <Thumbnail
            key={image.id}
            thumbnailUrl={image.thumbnailUrl}
            thumbnailAltText={image.thumbnailAltText}
            onClick={() => handleThumbnailClick(image.imageUrl)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
