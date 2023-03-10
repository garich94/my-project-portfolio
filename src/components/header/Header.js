import "./style.css";
//import { NavLink } from "react-router-dom";

const Header = () => {
  //const activeLink = "nav-list__link nav-list__link--active";
  //const normalLink = "nav-list__link";
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет, меня зовут <em>Александр</em>
          </strong>
          <br />я начинающий разработчик
        </h1>
        <div className="header__text">
          <p>
            поставил перед собой цель к концу 2023 года устроится на работу
            solidity developer.
          </p>
        </div>
        <a
          rel="noreferrer"
          href="https://github.com/garich94"
          target={"_blank"}
          className="btn"
        >
          Мой gitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
