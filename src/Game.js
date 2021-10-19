import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

/**
 * Game component
 * 
 * Props:
 * - deckId - ID of card deck
 * - BASE_URL - the API URL for drawing a card
 * 
 * State: 
 * - card - selected card from API call
 * 
 * App -> Game -> Card
 */
function Game({ deckId, BASE_URL }){
    const [card, setCard] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);

    /**  */
    function getCard(){
        setIsDrawing(true);
    };
    
    useEffect(function fetchSingleCardOnClick() {
        async function fetchSingleCard() {
          const results = await axios.get(`${BASE_URL}/${deckId}/draw`);
          setCard(results.data.cards[0]);
        }
        fetchSingleCard();
        
      }, [isDrawing]);

      return (
        <div>
            <button onClick={getCard}>Gimme a Card!</button>
            <Card card={card} />
        </div>
      );
}

export default Game;