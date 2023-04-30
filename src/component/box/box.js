import "./box.scss";

const Box = ({ i, go, setGo, index, cells, setCells, winningMessage }) => {
  const handleClick = (e, index) => {
    if (cells[index] === "") {
      cells[index] = go;
      setCells([...cells]);
      console.log(index, cells);
      if (go === "o") {
        setGo("x");
      } else {
        setGo("o");
      }
    }
  };
  return (
    <div className="boxRowContainer">
      <div
        className="box"
        onClick={(e) => !winningMessage && handleClick(e, index)}
        id={index}
      >
        {i}
      </div>
    </div>
  );
};

export default Box;
