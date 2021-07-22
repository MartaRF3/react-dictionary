import React, {useState} from 'react';

let Main = () => {
  let [inputText, setInputText] = useState('');
  let [word, setWord] = useState('');

  let updateText = (input) => {
    setInputText(input.target.value);
  }

  let logSearch = (event) => {
    event.preventDefault();
    setWord(inputText);
    setInputText('');
  }

  return (
    <main className="main">
      <div className="main__container">
        <div className="searcher">
          <div className="form">
            <form action="" onSubmit={logSearch}>
              <div className="form__box">
                <input
                    onChange={updateText}
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
              <span>{`Searching for ${word} definition...`}</span>
            </form>
          </div>
        </div>
        <div className="main__content">
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
