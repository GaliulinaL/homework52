import Card from './Card';

class CardDeck {
    cards: Card[] = [];

    constructor() {
        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(ranks[j], suits[i]));
            }
        }
    }

    getCard(): Card {
        const index = Math.floor(Math.random() * this.cards.length);
        const card = this.cards[index];
        this.cards.splice(index, 1);
        return card;
    }

    getCards(count: number): Card[] {
        const result: Card[] = [];

        for (let i = 0; i < count; i++) {
            result.push(this.getCard());
        }

        return result;
    }
}

export default CardDeck;