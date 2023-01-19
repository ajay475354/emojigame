import "./index.css";

const winImage = "https://assets.ccbp.in/frontend/react-js/won-game-img.png";
const lossImage = "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";

const WinOrLossCard = (props) => {
  const { isWon, score, onClickPlayAgain } = props;

  const ImageUrl = isWon ? winImage : lossImage;
  const gameStatus = isWon ? "You Won" : "You Loss";
  const scoreLabel = isWon ? "Best Score" : "Score";

  return (
    <div className="win-or-lose-card">
      <div className="details_container">
        <h1 className="head_name">{gameStatus}</h1>
        <p className="label_name">{scoreLabel}</p>
        <p>{score}/12</p>
        <button
          className="play_again_button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image_container">
        <img src={ImageUrl} alt="ajay" className="win_or_loss_image" />
      </div>
    </div>
  );
};

export default WinOrLossCard;
