import React from 'react';

import Meaning from './Meaning';

let Word = ({ wordData }) => {
  
  let playSound = () => {
    let myAudio = document.querySelector(".word__audio");
    myAudio.play();
  }

  let meanings = wordData.meanings;

  let printMeaning = (element) => {
    return (
      <Meaning type={element.partOfSpeech} definitions={element.definitions} />
    )
  }

  if (wordData.ready) {
    return (
      <div className="word">
        <div className="word__container">
          <h2 className="word__title">{wordData.word}</h2>
          <div className="word__fonetics">
            <p><em>{wordData.phonetic}</em></p>
            <audio className="word__audio" src={wordData.audio}>
            </audio>
            <span onClick={playSound}>🔈</span>
          </div>
          {
            meanings.map(printMeaning)
          }
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