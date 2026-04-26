interface Props {
    rank: string;
    suit: string;
}

const Card = ({ rank, suit }: Props) => {

    const getSymbol = (suit: string) => {
        if (suit === 'diams') return '♦';
        if (suit === 'hearts') return '♥';
        if (suit === 'clubs') return '♣';
        if (suit === 'spades') return '♠';
        return '';
    };

    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{getSymbol(suit)}</span>
    </span>
    );
};

export default Card;