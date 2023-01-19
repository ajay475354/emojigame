import { Component } from "react";

import Navbar from "../Navbar/index";
import EmojiCard from "../EmojiCard/index";
import WinOrLossCard from "../WinOrLossCard/index";

import "./index.css";

class EmojiGame extends Component {
  state = {
    isGameInProgress: true,
    emojiClickedList: [],
    topscore: 0,
  };

  endGameAndFixTopScore = (prasentScore) => {
    const { topscore } = this.state;

    let newTopscore = topscore;

    if (prasentScore > topscore) {
      newTopscore = prasentScore;
    }
    this.setState({
      topscore: newTopscore,
      isGameInProgress: false,
    });
  };

  clickEmoji = (id) => {
    const { emojisList } = this.props;
    const { emojiClickedList } = this.state;

    const isEmojiPrasent = emojiClickedList.includes(id);
    const emojiClickedListLength = emojiClickedList.length;

    if (isEmojiPrasent) {
      this.endGameAndFixTopScore(emojiClickedListLength);
    } else {
      if (emojisList.length - 1 === emojiClickedListLength) {
        this.endGameAndFixTopScore(emojisList.length);
      }
      this.setState((prevState) => ({
        emojiClickedList: [...prevState.emojiClickedList, id],
      }));
    }
  };

  renderEmojiList = () => {
    const { emojisList } = this.props;
    const shuffledEmojiList = emojisList.sort(() => Math.random() - 0.5);
    return (
      <ul className="unorder_list_container">
        {shuffledEmojiList.map((each) => (
          <EmojiCard each={each} key={each.id} clickEmoji={this.clickEmoji} />
        ))}
      </ul>
    );
  };

  onClickPlayAgain = () => {
    this.setState({
      emojiClickedList: [],
      isGameInProgress: true,
    });
  };

  renderScoreCard = () => {
    const { emojiClickedList } = this.state;

    const { emojisList } = this.props;

    const isWon = emojisList.length === emojiClickedList.length;
    const clickedScore = emojiClickedList.length;

    return (
      <WinOrLossCard
        isWon={isWon}
        score={clickedScore}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    );
  };

  render() {
    const { isGameInProgress, topscore, emojiClickedList } = this.state;
    return (
      <div className="game_bg_container">
        <Navbar
          topscore={topscore}
          score={emojiClickedList.length}
          isGameInProgress={isGameInProgress}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    );
  }
}

export default EmojiGame;
