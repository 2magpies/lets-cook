import React from 'react';




const SuggestedPanel = ({ images }) => {
  // return early if there are no images
  if (!images.length) {
    return <h2>No Images Found!</h2>;
  }

  return (
    <div className="gallery">
      {images.map(image => (
        <div key={image.id} className="gif">
          <img src={image.url} alt={image.title} width="200"/>
        </div>
      ))}
    </div>
  );
};

export default SuggestedPanel;
