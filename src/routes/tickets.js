
import { useNavigate } from 'react-router-dom';

export default function Tickets() {
    let navigate = useNavigate();
    return (
        <main style={{ padding: '1rem' }}>
            <button onClick = {() => navigate("buyTickets")}>
                Acquista biglietto
            </button>
            <button onClick = {() => navigate("soldTickets")}>
                Visualizza biglietti
             </button>
        </main>
    );
} 