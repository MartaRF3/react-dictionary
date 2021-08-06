import React, {useState} from 'react';
import axios from 'axios';

import Word from './Word';

let Main = () => {
  let [word, setWord] = useState('');
  let [wordData, setWordData] = useState({ready: false});

  let inputHandler = (input) => {
    setWord(input.target.value);
  }

  let submitHandler = (event) => {
    event.preventDefault();
    searchWord();
  }
  
  let searchWord = () => {
    // https://api.dictionaryapi.dev/api/<--version-->/entries/<--language_code-->/<--word-->
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    console.log(url);

    axios.get(url)
      .then(responseHandler)
      .catch(error => console.log(error))

      let input = document.getElementById('searcher');
      input.value = '';
  }

  let responseHandler = (response) => {
    console.log(response.data);
    setWordData({
      ready: true,
      word: response.data[0].word,
      phonetics: response.data[0].phonetics,
      meanings: response.data[0].meanings,
    });
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
        </div>
      </div>
    </main>
  )
}

export default Main;
