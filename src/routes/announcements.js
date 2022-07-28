import * as React from 'react';

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
import { getAnnouncements } from '../data';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Announcements() {
  let announcements = getAnnouncements();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

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
        {announcements
          .filter((announcement) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let title = announcement.title.toLowerCase();
            return title.includes(filter.toLowerCase());
          })
          .map((announcement) => (
            <QueryNavLink
              key={announcement.id}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/announcements/${announcement.id}`}
            >
              {announcement.title}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
