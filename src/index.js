import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Announcements from "./routes/announcements"
import Announcement from "./routes/announcement";
import Game from "./routes/game";
import Games from "./routes/games";
import Tickets from "./routes/tickets";
import Ticket from "./routes/ticket";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="announcements" element={<Announcements />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Seleziona un annuncio</p>
                </main>
              }
            />
            <Route path=":announcementId" element={<Announcement />} />
          </Route>
          <Route path="games" element={<Games />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Seleziona una partita</p>
                </main>
              }
            />
            <Route path=":gameId" element={<Game />} />
          </Route>
          <Route path="tickets" element={<Tickets />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Seleziona un biglietto</p>
                </main>
              }
            />
            <Route path=":ticketId" element={<Ticket />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
