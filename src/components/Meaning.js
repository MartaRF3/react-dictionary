import React from 'react';

import Synonyms from './Synonyms';

let Meaning = ({type, definitions}) => {
  let key = Math.random() * 100;

  let printDefinition = (element) => {
    let key = Math.random() * 100;

    if (element.synonyms.length > 0) {
      return (
        <li key={key}>
          <p>{element.definition}</p>
          <Synonyms synonyms={element.synonyms} />
        </li>
      )
    } else {
      return (
        <li key={key}>
          <p>{element.definition}</p>
        </li>
      )
    }
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
