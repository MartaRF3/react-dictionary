import React from 'react';

let Word = ({ wordData }) => {
  console.log(wordData);
  
  let playSound = () => {
    let myAudio = document.querySelector(".word__audio");
    myAudio.play();
  }

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
        <div className="meaning">
          <h3 className="meaning__title">{wordData.meaning.type}</h3>
          <p className="meaning__text">{wordData.meaning.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Word;