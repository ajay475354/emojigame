import "./index.css";

const EmojiCard = (props) => {
  const { each, clickEmoji } = props;
  const { id, emojiName, emojiUrl } = each;

  const onClickEmoji = () => {
    clickEmoji(id);
  };

  return (
    <li className="list_container">
      <button type="button" className="button_emoji" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  );
};

export default EmojiCard;
