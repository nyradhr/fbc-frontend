import * as React from 'react';

import { useParams} from 'react-router-dom';
import { getAnnouncement } from '../data';

export default function Announcement() {
  //let navigate = useNavigate();
  let params = useParams();
  let announcement = getAnnouncement(parseInt(params.announcementId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h3>{announcement.id}</h3>
      <h1>{announcement.title}</h1>
      <h2>{announcement.score}</h2>
      <button>Upvote</button> {/*implement functionality in accordance with DB*/}
      <button>Downvote</button>
      <p>{announcement.content}</p>
      
      {/**comments here? */}
    </main>
  );
}
