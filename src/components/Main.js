import React, {useState} from 'react';
import axios from 'axios';

import Word from './Word';

let Main = () => {
  let [word, setWord] = useState('');
  let [wordData, setWordData] = useState({ready: false});
  let [photoData, setPhotoData] = useState([]);

  let inputHandler = (input) => {
    setWord(input.target.value);
  }

  let submitHandler = (event) => {
    event.preventDefault();
    searchWord();
  }
  
  let searchWord = () => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    let pexelsAPIKey = '563492ad6f917000010000012384f85b667d49f2b93107eeda57a305';
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=8`;
    
    axios.get(url)
      .then(responseHandler)
      .catch(error => console.log(error))

    let input = document.getElementById('searcher');
    input.value = '';

    axios.get(pexelsUrl, {
        headers: {
          "Authorization" : `Bearer ${pexelsAPIKey}`
        }
      })
      .then(pexelsResponseHandler)
      .catch(error => console.log(error))
  }

  let responseHandler = (response) => {
    setWordData({
      ready: true,
      word: response.data[0].word,
      phonetics: response.data[0].phonetics,
      meanings: response.data[0].meanings,
    });
  }

  let pexelsResponseHandler = (response) => {
    setPhotoData(response.data.photos)
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
          <Word wordData={wordData} photoData={photoData} />
        </div>
      </div>
    </main>
  )
}

export default Main;
