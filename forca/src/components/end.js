import './end.css'; 

function End ({restart}) {

    return (

        <div>

            <h1>Game Over</h1>

            <button onClick={restart}>Restart</button>

        </div>

    )

}

export default End; 