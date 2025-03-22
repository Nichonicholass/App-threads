
function Card({username, text, onDelete, onEdit, number, onLike}) {
  return (
    <>
     <div className="thread-card">
        <button className="button-card" onClick={onDelete}>X</button>
      <h2 className="username">{username}</h2>
      <p className="text">{text}</p>
        <button className="button-card" onClick={onEdit}>Edit</button>
        <button className="button-card" onClick={onLike}>Like {number}</button>
    </div>
    </>
  );
}

export default Card;
