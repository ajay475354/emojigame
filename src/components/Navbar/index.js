import "./index.css";

const Navbar = (props) => {
  const { topscore, score, isGameInProgress } = props;
  return (
    <nav className="nav_container_bg">
      <div className="logo_and_name_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="game_logo"
          alt="game"
        />
        <h1 className="logo_name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score_container">
          <p className="score">Score:{score}</p>
          <p className="score">Top Score:{topscore}</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
