import { useEffect, useState } from "react";
import Board from "../component/board/board";
import "./homepage.scss";
const DEFAULT_BOARD_VALUE = ["", "", "", "", "", "", "", "", ""];
const WINNINGS_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const HomePage = () => {
  const [cells, setCells] = useState(DEFAULT_BOARD_VALUE);
  const [go, setGo] = useState("o");
  const message = `its ${go} turn now`;
  const [winningMessage, setWinningMessage] = useState(null);

  const handleReset = () => {
    setCells([...DEFAULT_BOARD_VALUE]);
    setWinningMessage(null);
    setGo("o");
  };
  const checkWinner = () => {
    const gamePlay = cells.some((idx) => idx === "");
    console.log("gamePlay : ", gamePlay);
    if (!gamePlay) {
      setWinningMessage("Match Draw");
    }
    WINNINGS_COMBOS.forEach((arr) => {
      const circleWins = arr.every((idx) => cells[idx] === "o");
      if (circleWins) {
        setWinningMessage("o wins");
      }
      const crossWins = arr.every((idx) => cells[idx] === "x");
      if (crossWins) {
        setWinningMessage("x wins");
      }
    });
  };
  useEffect(() => {
    checkWinner();
  }, [cells]);

  return (
    <div>
      <div>Header</div>
      <div className="boardContainer">
        <Board
          go={go}
          setGo={setGo}
          cells={cells}
          setCells={setCells}
          winningMessage={winningMessage}
        />
        <div>
          <span>{winningMessage || message}</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
