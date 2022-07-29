import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

export default function Game() {
  let params = useParams();
  let id = parseInt(params.gameId, 10);
  let [game, setGame] = useState({});
  const loadGame = () => {
    axios.get(`http://localhost:8080/games/${id}`)
    .then((res) => setGame(res.data))
  };
  useEffect(loadGame, [id]);
  return (
    <main style={{ padding: '1rem' }}>
      <h1>{game.opposingTeam}</h1>
      <h2>{game.gameDate}</h2>
      <h3>{game.stadium}</h3>
      <p>AVELLINO: {game.ourScore} - {game.opposingTeam}: {game.opposingScore}</p>
    </main>
  );
}
