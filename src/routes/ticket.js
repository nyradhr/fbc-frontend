import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Ticket() {
    let params = useParams();
    let id = parseInt(params.ticketId, 10);
    let [ticket, setTicket] = useState({});
    const loadTicket = () => {
        axios.get(`http://localhost:8080/tickets/${id}`)
            .then((res) => setTicket(res.data))
    };
    useEffect(loadTicket, [id]);
    return (
        <main style={{ padding: '1rem' }}>
            <h1>{ticket.opposingTeam}</h1>
            <h2>{ticket.gameDate}</h2>
            <h3>{ticket.stadium}</h3>
            <p>{ticket.recipient}</p>
            <p>{ticket.type} {ticket.seatNumber}</p>
            <p>{ticket.cost}</p>
        </main>
    );
}
