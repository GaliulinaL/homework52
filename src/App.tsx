import './App.css'
import { useState } from 'react';
import CardView from './Card';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import PokerHand from './lib/PokerHand';

const App = () => {

  const [cards, setCards] = useState<Card[]>([]);
  const [result, setResult] = useState('');

  const [selected, setSelected] = useState<number[]>([]);

  const [deck, setDeck] = useState<CardDeck | null>(null);

  const handleClick = () => {
    const newDeck = new CardDeck();
    const newCards = newDeck.getCards(5);

    setDeck(newDeck);
    setCards(newCards);

    const hand = new PokerHand(newCards);
    setResult(hand.getOutcome());
  };

  return (
      <div>
        <button onClick={handleClick}>Раздать</button>

        {cards.length > 0 && (
            <>
              <div className="playingCards faceImages">
                {cards.map((c, i) => (
                    <div key={i}>
                      <input
                          type="checkbox"
                          onChange={() => {
                            if (selected.includes(i)) {
                              setSelected(selected.filter(x => x !== i));
                            } else {
                              setSelected([...selected, i]);
                            }
                          }}
                      />

                      <CardView rank={c.rank} suit={c.suit} />
                    </div>
                ))}
              </div>
              <button
                  onClick={() => {
                    if (!deck) return;

                    const newCards = [...cards];

                    for (let i = 0; i < selected.length; i++) {
                      newCards[selected[i]] = deck.getCard();
                    }

                    setCards(newCards);
                    setSelected([]);

                    const hand = new PokerHand(newCards);
                    setResult(hand.getOutcome());
                  }}
              >
                Заменить
              </button>

              <p>{result}</p>
            </>
        )}
      </div>
  );
};

export default App;