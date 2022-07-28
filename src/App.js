import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <section className="grid-container">
        <section id="topRow">
          <div className="App">
            <header className="App-header">
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
                <img src="./img/logo.jpg" width="150" height="100" alt="logo"/>
            </div>
               <nav
                  style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                  }}
              >     
              <ul className="menu">
              <Link to="/Home">Home</Link> |{" "}
              <Link to="/Partite">Partite</Link> 
              <Link to="/Biglietti">Biglietti</Link>
            </ul>    
                </nav>
                <Outlet />
          </div>
        </section>
        <section id="presentation">
            <p>Compra i nostri biglietti! Solo 2012912i31204108 euro</p>
        </section>
      </section>
      <article className="grid-item">
          <p>Title: Java For Beginners</p>
          <p>Start Date: 01-04-2020</p>
          <p>End Date: 25-06-2020</p>
          <p>Financing: Public</p>
          <p>Tutor: Andrea Di Giugno</p>
          <p>Cost: 800</p>
          <p>Code: A5F7G3</p>
        </article>
        <article className="grid-item">
          <p>Title: Go For Japanese Chess Players</p>
          <p>Start Date: 23-11-2025</p>
          <p>End Date: 11-03-2026</p>
          <p>Financing: Private</p>
          <p>Tutor: Takamoto Hoshisama</p>
          <p>Cost: 1231241411</p>
          <p>Code: 8HF87H</p>
        </article>
        <article className="grid-item">
          <p>Title: WTF is a Monad? CRustaceans Assemble!</p>
          <p>Start Date: 13-05-2022</p>
          <p>End Date: 22-07-2022</p>
          <p>Financing: Private</p>
          <p>Tutor: Franco Mattei</p>
          <p>Cost: 1500</p>
          <p>Code: R7B4L9</p>
        </article>
        <article className="grid-item">
          <p>Title: Learn to Make your Own Web Page in just a Decade</p>
          <p>Start Date: 15-06-2010</p>
          <p>End Date: 15-06-2020</p>
          <p>Financing: Public</p>
          <p>Tutor: Franz Kafka</p>
          <p>Cost: 5</p>
          <p>Code: 7F2B9F82</p>
        </article>
        <footer>
        <p>End of Page</p>
      </footer>
    </>
  );
}

export default App;
