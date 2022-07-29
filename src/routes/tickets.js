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

export default function Tickets() {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  const loadTickets = () => {
    axios.get("http://localhost:8080/tickets")
      .then((res) => setTickets(res.data))
  };
  let [tickets, setTickets] = useState([]);
  useEffect(loadTickets, []);
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
        {tickets
          .filter((ticket) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let recipient = ticket.recipient.toLowerCase();
            return recipient.includes(filter.toLowerCase());
          })
          .map((ticket) => (
            <QueryNavLink
              key={ticket.id}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/tickets/${ticket.id}`}
            >
              {ticket.recipient} - {ticket.opposingTeam} {ticket.gameDate}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
