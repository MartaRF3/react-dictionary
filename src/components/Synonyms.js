import React from 'react';


let Synonyms = ({synonyms}) => {
  if (synonyms) {

    let printSynonyms = (element) => {
      return (
        <span>{element}</span>
      )
    }

    return (
      <div className="synonyms">
        <p>Synonyms: </p>
        <div className="synonyms__container">
          {
            synonyms.map(printSynonyms)
          }
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Synonyms;