import {useEffect, useState} from 'react';
import axios from 'axios';

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function BuyTickets() {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  const loadFutureGames = () => {
    axios.get("http://localhost:8080/games?future=true")
      .then((res) => setFutureGames(res.data))
  };
  let [futureGames, setFutureGames] = useState([]);
  useEffect(loadFutureGames, []);
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter }, { replace: true });
            } else {
              setSearchParams({}, { replace: true });
            }
          }}
        />
        {futureGames
          .filter((game) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let opposingTeam = game.opposingTeam.toLowerCase();
            return opposingTeam.includes(filter.toLowerCase());
          })
          .map((futureGame) => (
            <QueryNavLink
              key={futureGame.id}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/tickets/buyTickets/${futureGame.id}`}
            >
              {futureGame.opposingTeam} {futureGame.gameDate}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
