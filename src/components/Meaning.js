import React from 'react';

let Meaning = ({type, definitions}) => {

  let printDefinition = () => {
    return (
      <p className="meaning__text">Hi there im a meaning</p>
    )
  }

  return (
    <div className="meaning">
      <h3 className="meaning__title">{type}</h3>
      {definitions.forEach(printDefinition)}
    </div>
  )
}

export default Meaning;
