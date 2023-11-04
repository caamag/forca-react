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

  //start Game
  const startGame = () => { setGameStage(stages[1].name) }; 

  //process the letter input
  const verifyLetter = () => { setGameStage(stages[2].name) }; 

  //Restart
  const restart = () => { setGameStage(stages[0].name) }; 

  return (
    <div className="App">

      {gameStage == 'start' && <StartScreen startGame = {startGame}/>}
      {gameStage == 'game' && <Game verify={verifyLetter}/>}
      {gameStage == 'end' && <End  restart={restart}/>}

    </div>
  );
}

export default App;
