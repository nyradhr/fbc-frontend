import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getAnnouncement } from '../data';

export default function Announcement() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getAnnouncement(parseInt(params.announcementId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>ID: {announcement.id}</h2>
      <p>
        {announcement.name}: {announcement.score}
      </p>
     
    </main>
  );
}
