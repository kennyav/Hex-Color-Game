import { useState } from 'react'
import './App.css'

// Custom Imports
import Game from './Components/Game'


function App() {
  const [gameStarted, setGameStarted] = useState(false)

  // TODO: make main menu
  function handleStartButton() {
    setGameStarted(!gameStarted);
  }

  return (
    <div className='App'>
      { gameStarted ?

        <Game /> : (

        <div className="menu">
          <div className="menu-content">
            THIS IS HEX COLOR MATCHING GAME
            <div className='menu-button'>
              <button onClick={() => handleStartButton()}>START GAME</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
