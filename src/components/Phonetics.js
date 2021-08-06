import React from 'react';

let Phonetics = ({phonetics}) => {
    
  let playSound = (element) => {
    let myAudio = element.target.previousSibling;
    myAudio.play();
  }

  let printPhonetics = (element, index) => {
    return (
      <div className="container" key={index}>
        <p><em>{element.text}</em></p>
        <audio className="word__audio" src={element.audio}>
        </audio>
        <span onClick={playSound}>🔈</span>
      </div>
    )
  }

  return (
    <div className="word__phonetics">
      {phonetics.map(printPhonetics)}
  </div>
  )
}

export default Phonetics;