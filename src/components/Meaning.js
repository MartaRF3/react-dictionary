import React from 'react';

let Meaning = ({type, definitions}) => {
  let key = Math.random() * 100;

  let printDefinition = (element) => {
    let key = Math.random() * 100;
    return (
      <li key={key}>{element.definition}</li>
    )
  }
    
  return (
    <div className="meaning" key={key}>
      <h3 className="meaning__title">{type}</h3>
      <ol className="meaning__text">
        {definitions.map(printDefinition)}
      </ol>
    </div>
  )
}

export default Meaning;
