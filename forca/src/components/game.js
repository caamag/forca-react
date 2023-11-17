
import './game.css'; 

function Game ({verify, wordSelect, categorySelect, letter, guessedLetter, wrongLetter, guesses, score}) {

    return (
        <div className='game-section'>

            <h1>Game</h1>

            <div className='word-container'>

                <span className='letter'>A</span>
                <span className='blankSquare'>A</span>

            </div>

            <h2>Tente adivinhar a palavra:</h2>

            <div className='gameLetterSelect'>

                <form>

                    <input type="text" className='letterSelect' maxLength={1}/>
                    <button className='btnGame'>Jogar</button>

                </form>

            </div>

            <p className='pastLettersP'>Letras utilizadas: <br/><span className='pastLetters'>a, b</span></p>

            <p className='categoria'>Dica: <span>dica...</span></p>
            <p className='points'>Pontos: <span>pontos...</span></p>

            <button onClick={verify} className='btn'>Finish</button>

        </div>
    )

}

export default Game; 