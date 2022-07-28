import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

export default function Announcement() {
  let params = useParams();
  let id = parseInt(params.announcementId, 10);
  let [announcement, setAnnouncement] = useState({});
  const loadAnnouncement = () => {
    axios.get(`http://localhost:8080/announcements/${id}`)
    .then((res) => setAnnouncement(res.data))
  };
  useEffect(loadAnnouncement, [id]);
  return (
    <main style={{ padding: '1rem' }}>
      <h1>{announcement.title}</h1>
      <h2>{announcement.score}</h2>
      <button>Upvote</button> 
      <button>Downvote</button>
      <p>{announcement.content}</p>
    </main>
  );
}
