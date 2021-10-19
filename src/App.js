import { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
// import './App.css';
 
const BASE_URL='http://deckofcardsapi.com/api/deck';

/** App for drawing a card from a deck of cards
 * 
 * Props: 
 * - none
 * 
 * State: 
 * - deckId - ID of card deck
 * 
 * App -> Game
 */
function App(){
  const [deckId, setDeckId] = useState(null);

  useEffect(function fetchDeckIdOnMount() {
    async function fetchDeckId() {
      const results = await axios.get(`${BASE_URL}/new`);
      setDeckId(results.data.deck_id);
    }
    fetchDeckId();
  }, [ ]);

  if (!deckId) return <i>Loading...</i>

  return (
    <div>
      <Game deckId={deckId} BASE_URL={BASE_URL} />
    </div>
  );
}

export default App;
