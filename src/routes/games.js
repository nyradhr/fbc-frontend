import {useEffect, useState} from 'react';
import axios from 'axios';
import TableDatePicker from "../DatePicker.js"

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

export default function Games() {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  const loadGames = () => {
    axios.get("http://localhost:8080/games")
    .then((res) => setGames(res.data))
  };
  let [games, setGames] = useState([]);
  useEffect(loadGames, []);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const changeDate = ([sd, ed]) => {
    setStartDate(sd ? new Date(sd.setUTCHours(0,0,0)) : null);
    setEndDate(ed ? new Date(ed.setUTCHours(0,0,0)) : null);
  };
  //const changeEndDate = (ed) => setEndDate(ed);

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        <TableDatePicker onChange={changeDate} startDate={startDate} endDate={endDate}/> 
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
        {games
          .filter((game) => {
            let filter = searchParams.get('filter');
            let date = new Date(game.gameDate);
            date = new Date(date.setUTCHours(0,0,0));
            let opposingTeam = game.opposingTeam.toLowerCase();
            //console.log('date'+date);
            //console.log('startDate'+startDate);
            //console.log('endDate'+endDate);
            return (!filter || opposingTeam.includes(filter.toLowerCase())) && date <= endDate && date >= startDate;
          })
          .map((game) => (
            <QueryNavLink
              key={game.id}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/games/${game.id}`}
            >
              {game.opposingTeam} {game.gameDate}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
