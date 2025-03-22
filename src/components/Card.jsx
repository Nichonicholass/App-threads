
function Card({username, text, onDelete}) {
  return (
    <>
     <div className="thread-card">
        <button className="button-card" onClick={onDelete}>X</button>
      <h2 className="username">{username}</h2>
      <p className="text">{text}</p>
    </div>
    </>
  );
}

export default Card;
