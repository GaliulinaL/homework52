import './App.css'
import { useState } from 'react';
import CardView from './Card';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import PokerHand from './lib/PokerHand';

const App = () => {

  const [cards, setCards] = useState<Card[]>([]);
  const [result, setResult] = useState('');

  const handleClick = () => {
    const deck = new CardDeck();
    const newCards = deck.getCards(5);

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
                    <CardView key={i} rank={c.rank} suit={c.suit} />
                ))}
              </div>

              <p>{result}</p>
            </>
        )}
      </div>
  );
};

export default App;