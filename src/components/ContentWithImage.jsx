import React from 'react';
import './ContentWithImage.css';

const ContentWithImage = ({ content, imageUrl }) => {
  return (
    <div className="content-with-image">
      <p className="content">{content}</p>
      <div className="image">
        <img src={imageUrl} alt="Content Image" />
      </div>
    </div>
  );
};

export default ContentWithImage;
