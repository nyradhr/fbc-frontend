import './App.css';
import { Outlet, Link } from "react-router-dom";
import logo from './img/logo.jpg';

function App() {
  return (
    <>
      <section className="app-container">
        <section id="topRow">
          <div className="app-header">
            <header>
              <div className ="rectangle">
                <p className = "title">
                  Avellino Football Club 
                </p>
                <p className = "subtitle">
                  Segui la tua squadra del cuore!
                </p>
              </div>
            </header>
          </div>
          <div className="menu-holder">
            <div className="logo">
                <img src={logo} width="150" height="100" alt="logo"/>
            </div>
              <div>     
                  <ul className="menu">
                    <li><Link to="/announcements">Home</Link></li>
                    <li><Link to="/games">Partite</Link></li>
                    <li><Link to="/tickets">Biglietti</Link></li>
                  </ul>    
              </div>
          </div>
        </section>
        <nav id="query-menu" style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
          <Outlet />
        </nav>
      </section>
    </>
  );
}

export default App;
