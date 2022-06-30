import React from "react";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav className="promo__navtab">
      <ul className="promo__navtab__list">
        <li className="promo__navtab__list-item">
          <a className="promo__navtab__list-link" href="#about-project">О проекте</a>
        </li>
        <li className="promo__navtab__list-item">
          <a className="promo__navtab__list-link" href="#technologies">Технологии</a>
        </li>
        <li className="promo__navtab__list-item">
          <a className="promo__navtab__list-link" href="#student">Студент</a>
        </li>
      </ul>
    </nav>
    </section>
  )
}

export default Promo;
