import { useState } from "react";

function ModalCreate({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onSubmit({ username, text });
  };
  return (
    <>
      <div className="modal">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default ModalCreate;
