import React from 'react';

const Thumbnail = ({ thumbnailUrl, thumbnailAltText, onClick }) => {
  return (
    <div className="thumbnail" onClick={onClick}>
      <img src={thumbnailUrl} alt={thumbnailAltText} />
    </div>
  );
};

export default Thumbnail;
