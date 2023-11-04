
import './StartScreen.css'; 

function StartScreen ({startGame}) {

    return (

        <div className="start">

            <h1>Secret Word</h1>

            <button onClick={startGame}>START</button>

        </div>

    )

}

export default StartScreen; 