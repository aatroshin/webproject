
import './App.css';
function App() {
  return (
    <div>
      <p><center><img src="https://aatroshin.ru/images/at.png" width="183" height="89" alt="Main"></img></center></p>
      <section className="cards">
        <article className="card card--1">
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info">
            <span className="card__category"> iOS App</span>
            <h3 className="card__title">BRAND GAME</h3>
          </div>
        </article>


        <article className="card card--2">
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info">
            <span className="card__category">VK community</span>
            <h3 className="card__title">OLD NETWORK</h3>
          </div>
        </article>


      </section>
      <h1>@aatroshin</h1>
      <img src="https://aatroshin.ru/images/insta.png" width="50" height="50" alt="Main"></img>
      <img src="https://aatroshin.ru/images/github.png" width="50" height="50" alt="Main"></img>
    </div>
  );
}

export default App;
