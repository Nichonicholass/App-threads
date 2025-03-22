import { useState } from "react";

import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import ModalCreate from "./components/ModalCreate";
function App() {
  const [card, setCard] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const addCard = (newCard) => {
    setCard((prev) => [...prev, newCard]);
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
  return (
    <>
      <h1>Threads</h1>
      <div>
        {/* <Card username={"asep123"} text={"lorem10 awokaowk"} /> */}
      </div>
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
