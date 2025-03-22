import { useState } from "react";

import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import ModalCreate from "./components/ModalCreate";
function App() {
  const [card, setCard] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const addCard = (newCard) => {
    setCard((prev) => [...prev, { ...newCard, like: 0 }]);
    setIsModalOpen(false);
  };

  const deleteCard = (index) => {
    setCard((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const savedCards = localStorage.getItem("cards");
    if (savedCards) {
      setCard(JSON.parse(savedCards));
    }
  }, []);

  useEffect(() => {
    if (card.length > 0) {
      localStorage.setItem("cards", JSON.stringify(card));
    }
  }, [card]);

  const editCard = (index) => {
    const newCard = prompt("Edit Card", card[index].text);
    if (newCard) {
      setCard((prev) =>
        prev.map((item, i) => (i === index ? { ...item, text: newCard } : item))
      );
    }
  };
  const handleLike = (index) => {
    setCard((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, like: item.like + 1 } : item
      )
    );
  };

  return (
    <>
      <h1>Threads</h1>
      <div>{/* <Card username={"asep123"} text={"lorem10 awokaowk"} /> */}</div>
      {isModalOpen && (
        <ModalCreate onSubmit={addCard} onClose={() => setIsModalOpen(false)} />
      )}

      <div>
        {card.map((card, index) => (
          <Card
            key={index}
            username={card.username}
            text={card.text}
            onDelete={() => deleteCard(index)}
            onEdit={() => editCard(index)}
            number={card.like}
            onLike={() => handleLike(index)}
          />
        ))}
      </div>
      <button className="button-create" onClick={() => setIsModalOpen(true)}>
        + Create Content
      </button>
    </>
  );
}

export default App;
