import Card from './Card';

class PokerHand {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        const counts: any = {};

        for (let i = 0; i < this.cards.length; i++) {
            const r = this.cards[i].rank;

            if (counts[r]) {
                counts[r]++;
            } else {
                counts[r] = 1;
            }
        }

        let pairs = 0;
        let three = false;

        for (let key in counts) {
            if (counts[key] === 2) pairs++;
            if (counts[key] === 3) three = true;
        }

        if (three) return 'Тройка';
        if (pairs === 2) return 'Две пары';
        if (pairs === 1) return 'Одна пара';

        const suit = this.cards[0].suit;
        let same = true;

        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].suit !== suit) {
                same = false;
            }
        }

        if (same) return 'Флеш';

        return 'Старшая карта';
    }
}

export default PokerHand;