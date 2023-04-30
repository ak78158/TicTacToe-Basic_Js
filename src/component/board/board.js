import Box from "../box/box";

const Board = ({ go, setGo, cells, setCells, winningMessage }) => {
  return cells.map((i, index) => {
    return (
      <Box
        i={i}
        go={go}
        setGo={setGo}
        cells={cells}
        key={index}
        index={index}
        setCells={setCells}
        winningMessage={winningMessage}
      />
    );
  });
};

export default Board;
