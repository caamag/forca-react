
import './game.css'; 
import { useState } from 'react';

function Game ({verify, wordSelect, categorySelect, letters, guessedLetter, wrongLetter, guesses, score}) {

    const [letter, setLetter] = useState(""); 

    function preventSubmit (e) {
        
        e.preventDefault(); 
        verify(letter); 

        setLetter(''); 
    
    }; 

    return (
        <div className='game-section'>

            <h1>Game</h1>

            <div className='word-container'>

                {letters.map((l, i) => (

                    guessedLetter.includes(l) ? (
                        <span key={i} className='letters'>{l}</span>
                    ) : (
                        <span key={i} className='letters'></span>
                    )

                ))}

            </div>

            <h2>Tente adivinhar a palavra:</h2>

            <div className='gameLetterSelect'>

                <form onSubmit={preventSubmit}>

                    <input type="text" className='letterSelect' maxLength={1} onChange={(e) => setLetter(e.target.value)} value={letter}/>          
                    <button className='btnGame'>Jogar</button>

                </form>

            </div>

            <p className='pastLettersP'>Letras utilizadas:<br/><span className='pastLetters'>
                
                {wrongLetter.map((l, i) => (

                    <span key={i}>{l}, </span>

                ))}
                
            </span></p>

            <p className='categoria'>Dica: <span>{categorySelect}</span></p>
            <p className='points'>Pontos: <span>{score}</span></p>
            <p className='guesses'>Você ainda tem <span>{guesses}</span> tentativas.</p>

        </div>
    )

}

export default Game; 