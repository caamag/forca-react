import './end.css'; 

function End ({restart, score}) {

    return (

        <div className='end-container'>

            <h1>Game Over</h1>

            <h2>Sua pontuação final foi <span>{score}</span>.</h2>

            <button onClick={restart}>Restart</button>

        </div>

    )

}

export default End; 