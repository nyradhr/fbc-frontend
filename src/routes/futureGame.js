import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';

export default function FutureGame() {
  let params = useParams();
  let id = parseInt(params.futureGameId, 10);
  let [game, setGame] = useState({});
  const loadGame = () => {
    axios.get(`http://localhost:8080/games/${id}`)
    .then((res) => setGame(res.data))
  };
  useEffect(loadGame, [id]);
  let navigate = useNavigate();
  return (
    <main style={{ padding: '1rem' }}>
      <h1>{game.opposingTeam}</h1>
      <h2>{game.gameDate}</h2>
      <h3>{game.stadium}</h3>
      <p>Prezzo curva: {game.standCost}</p>
      <p>Prezzo tribuna: {game.galleryCost}</p>
      <button onClick = {() => navigate("buyTicket")}>Compra biglietto</button>
    </main>
  );
}
