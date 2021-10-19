
/** Simple Card Component
 * 
 * Props: 
 * - card - an object like: 
 * { image, valie, suit, code }
 * 
 * State: 
 * - none
 * 
 * Game -> Card
 */
function Card({ card }){
    return (
        <div>
            <img src={card.image} 
                alt={`${card.value} of ${card.suit}`}>    
            </img>
        </div>
    );
}

export default Card;