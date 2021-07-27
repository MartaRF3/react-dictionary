import React, {useState} from 'react';
import axios from 'axios';

import Word from './Word';

let Main = () => {
  let [inputText, setInputText] = useState('');
  let [word, setWord] = useState('');
  let [wordData, setWordData] = useState({ready: false});

  let inputHandler = (input) => {
    setInputText(input.target.value);
  }

  let submitHandler = (event) => {
    event.preventDefault();
    setWord(inputText);
    setInputText('');
    searchWord();
  }
  
  let responseHandler = (response) => {
    console.log(response.data);
    setWordData({
      ready: true,
      word: response.data[0].word,
      phonetic: response.data[0].phonetics[0].text,
      audio: response.data[0].phonetics[0].audio,
      meaning: {
        type: response.data[0].meanings[0].partOfSpeech,
        text: response.data[0].meanings[0].definitions[0].definition,
      }
    });
  }
  
  let searchWord = () => {
    // https://api.dictionaryapi.dev/api/<--version-->/entries/<--language_code-->/<--word-->
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/hello`;

    axios.get(url)
      .then(responseHandler)
      .catch(error => console.log(error))

  }


  return (
    <main className="main">
      <div className="main__container">
        <div className="searcher">
          <div className="form">
            <form action="" onSubmit={submitHandler}>
              <div className="form__box">
                <input
                    onChange={inputHandler}
                    className="form__input"
                    type="search" 
                    name="searcher" 
                    id="searcher" 
                    placeholder="Search..."
                />
                <input 
                    className="form__submit"
                    type="submit" 
                    value="🔍" 
                />
              </div>
              <div className="form__helptext">
                <p>Introduce the word you want to search for</p>
              </div>
            </form>
          </div>
        </div>
        <div className="main__content">
          <Word wordData={wordData} />
          <div className="empty">
            <div className="empty__text">
              <p>Go ahead, search for a word in the searcher above</p>
            </div>
            <div className="empty__arrow">
              <p>↗</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;
