import React from 'react';

import Meaning from './Meaning';
import Phonetics from './Phonetics';
import Image from './Image';

let Word = ({ wordData, photoData }) => {

  let meanings = wordData.meanings;

  let printMeaning = (element) => {
    return (
      <Meaning type={element.partOfSpeech} definitions={element.definitions} />
    )
  }

  let printImage = (element) => {
    return (
      <Image id={element.id} author={element.photographer} url={element.src.medium} />
    )
  }


  let capitaliseThis = (word) => {
    // Make it lowercase - in case it's needed
    word = word.toLowerCase();
    // Extract the first letter
    let firstLetter = word[0];
    // Capitalise the first letter
    firstLetter = firstLetter.toUpperCase();
    // Extract the rest of the word
    let restOfWOrd = word.slice(1);
    // Put it back together
    return word = firstLetter.concat(restOfWOrd);
  }

  
  if (wordData.ready) {
    let title = capitaliseThis(wordData.word);
    console.log(photoData);

    return (
      <div className="word">
        <div className="word__container">
          <h2 className="word__title">{title}</h2>
          <Phonetics phonetics={wordData.phonetics} />
          {meanings.map(printMeaning)}
          <div className="images">
            {photoData.map(printImage)}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="empty">
        <div className="empty__text">
          <p>Go ahead, search for a word in the searcher above</p>
        </div>
        <div className="empty__arrow">
          <p>↗</p>
        </div>
      </div>
    )
  }
}

export default Word;