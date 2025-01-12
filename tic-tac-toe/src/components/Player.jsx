import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditnig] = useState(false);

  function handleClick() {
    setIsEditnig((editing) => !editing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={handleChange} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick} >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
