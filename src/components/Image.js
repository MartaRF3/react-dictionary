import React from 'react';

let Image = ({id, author, url}) => {

  return (
    <div className="image__container" key={id} >
      <img src={url} alt={`Photographer: ${author}`} />
      <p className="image__author">Photographer: {author}</p>
    </div>
  )
}

export default Image;