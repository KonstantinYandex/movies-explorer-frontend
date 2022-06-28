import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__list">
        <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/KonstantinYandex/how-to-learn">
          Статичный сайт
          <p className="portfolio__list-element">↗</p>
        </a>
        <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/KonstantinYandex/russian-travel">
          Адаптивный сайт
          <p className="portfolio__list-element">↗</p>
        </a>
        <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/KonstantinYandex/react-mesto-api-full">
          Одностраничное приложение
          <p className="portfolio__list-element">↗</p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
