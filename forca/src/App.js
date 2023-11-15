import './App.css';

//components
import StartScreen from './components/startScreen';
import Game from './components/game';
import End from './components/end';

//react
import {useCallback, useEffect, useState} from 'react'; 

//data (secret words)
import { wordList } from './data/words'; 


const stages = [

  {id: 1, name: 'start'}, 
  {id: 2, name: 'game'}, 
  {id: 3, name: 'end'}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  //select word and category
  function wordAndCategory() {

      //select a random category
      const categories = Object.keys(words); 
      const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]; 

      //select a random word
      const word = words[category][Math.floor(Math.random() * Object.keys(categories).length)]; 

      return {word, category}

  }

  const [wordSelect, setWordSelect] = useState(""); 
  const [categorySelect, setCategorySelect] = useState(""); 
  const [letters, setLetters] = useState(""); 


  //start Game
  const startGame = () => { 

    const {word, category} = wordAndCategory(); 

    //create an array of letters
    let wordLetters = word.split(''); 
    wordLetters = wordLetters.map((letter) => {return letter.toLowerCase()}); 

    setWordSelect(word); 
    setCategorySelect(category); 
    setLetters(wordLetters); 

    setGameStage(stages[1].name);

  }; 

  //process the letter input
  function verifyLetter () { setGameStage(stages[2].name) }; 

  //Restart
  function restart () { setGameStage(stages[0].name) };
  
  

  //Page

  return (
    <div className="App">

      {gameStage == 'start' && <StartScreen startGame = {startGame}/>}
      {gameStage == 'game' && <Game verify={verifyLetter}/>}
      {gameStage == 'end' && <End  restart={restart}/>}

    </div>
  );
}

export default App;
