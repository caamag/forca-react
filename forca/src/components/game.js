
import './game.css'; 

function Game ({verify}) {

    return (

        <div className='game-section'>

            <h1>Game</h1>

            <p className='categoria'>Dica: {}</p>

            <button onClick={verify} className='btn'>Finish</button>

        </div>

    )

}

export default Game; 