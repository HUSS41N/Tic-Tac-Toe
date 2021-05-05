import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import Icon from "./components/Icon";

const cardArray = new Array(9).fill("empty");
// const cardArray = ["empty","empty","empty","empty","empty","empty","empty","empty","empty"]
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const resetGame = () => {
    setIsCross(false);
    setWinMessage("");
    cardArray.fill("empty");
  };

  const checkWinner = () => {
    if (
      cardArray[0] !== "empty" &&
      cardArray[0] === cardArray[1] &&
      cardArray[0] === cardArray[2]
    ) {
      setWinMessage(`${cardArray[0]} is Winner`);
    } else if (
      cardArray[3] !== "empty" &&
      cardArray[3] === cardArray[4] &&
      cardArray[3] === cardArray[5]
    ) {
      setWinMessage(`${cardArray[3]} won`);
    } else if (
      cardArray[6] !== "empty" &&
      cardArray[6] === cardArray[7] &&
      cardArray[6] === cardArray[8]
    ) {
      setWinMessage(`${cardArray[6]} won`);
    } else if (
      cardArray[0] !== "empty" &&
      cardArray[0] === cardArray[4] &&
      cardArray[0] === cardArray[8]
    ) {
      setWinMessage(`${cardArray[0]} won`);
    } else if (
      cardArray[2] !== "empty" &&
      cardArray[2] === cardArray[4] &&
      cardArray[2] === cardArray[6]
    ) {
      setWinMessage(`${cardArray[2]} won`);
    }
  };

  const makeAMove = (cardIndex) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (cardArray[cardIndex] === "empty") {
      cardArray[cardIndex] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already! filled ", { type: "error" });
    }
    checkWinner();
  };

  return (
    <div className="flex">
      {winMessage ? (
        <div>
          <h1 className="header">{winMessage}</h1>
          <button onClick={resetGame} className="reset">
            Play Again
          </button>
        </div>
      ) : (
        <h1 className="header">{isCross ? "cross" : "circle"} Turn</h1>
      )}
      <div className="grid">
        {cardArray.map((card, index) => {
          return (
            <div class="space" onClick={() => makeAMove(index)}>
              <Icon iconName={card} />
            </div>
          );
        })}
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};
export default App;
