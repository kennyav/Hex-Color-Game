import { useEffect, useState } from 'react'
import '../App.css'

function Game() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [wrongSelection, setWrongSelection] = useState(false);
  const [correctSelection, setCorrectSelection] = useState(false);
  const [score, setScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(-1);


  const generateColors = () => {
    setTimeout(() => {
      const correctColor = getRandomHex();
      setColor(correctColor)
      setAnswers([correctColor, getRandomHex(), getRandomHex()].sort(
        () => 0.5 - Math.random()
      ));
      setCorrectSelection(false);
      setWrongSelection(false);
      setGamesPlayed(gamesPlayed + 1);
    }, 1000)

  }

  useEffect(() => {
    generateColors();
  }, [])

  const getRandomHex = () => {
    const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    const randomColor = new Array(6).fill('').map(() => hexValues[Math.floor(Math.random() * hexValues.length)]).join('');
    return "#" + randomColor;
  }

  function handleAnswerClicked(answer: string) {
    if (answer === color) {
      setWrongSelection(false);
      setCorrectSelection(true);
      setScore(score + 1);
      generateColors();
    } else {
      setWrongSelection(true);
      setCorrectSelection(false);
      generateColors();
    }

  }

  return (
    <div className="App">
      <div className='game'>
        <div className='guess-box' style={{ background: color }} />
        {answers.map((answer) =>
          <button
            onClick={() => handleAnswerClicked(answer)}
            key={answer}>{answer}</button>
        )}
        {
          wrongSelection &&
          <div className="wrong"> Wrong Answer </div>
        }
        {
          correctSelection &&
          <div className="correct"> Correct Answer! </div>
        }
      </div>
      <div className="score">Score: {score}/{gamesPlayed}</div>
    </div>
  )
}

export default Game
