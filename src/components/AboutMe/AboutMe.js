import React from "react";
import Title from "../Title/Title";
import Portret from "../../images/aboutme/portret.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <Title title="Студент" />
      <article className="about-me__container">
        <div className="about-me__container about-me__container_direction_column">
          <h3 className="about-me__title">Константин</h3>
          <p className="about-me__subtitle">Веб-разработчик, 25 лет</p>
          <p className="about-me__text">
            Меня зовут Константин и я пытаюсь сделать диплом!
          </p>
          <nav>
            <ul className="about-me__social-links-list">
              <li className="about-me__social-links-list-element">
                <a className="about-me__social-link" href="https://vk.com/kvn00" target="_blank" rel="noreferrer">
                  ВКонтакте
                </a>
                {/* ссылка на facebook не работает в любом случае */}
              </li>
              <li className="about-me__social-links-list-element">
                <a className="about-me__social-link" href="https://github.com/KonstantinYandex" target="_blank" rel="noreferrer">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <img className="about-me__photo" src={Portret} alt="Моя фотография"/>
      </article>
    </section>
  );
}

export default AboutMe;
