import "./styles/main.css";

import vk from "./img/icons/vk.svg";
import instagram from "./img/icons/instagram.svg";
import twitter from "./img/icons/twitter.svg";
import linkedIn from "./img/icons/linkedIn.svg";
import gitHub from "./img/icons/gitHub.svg";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Aleksandr</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="#!" className="btn">
            Download CV
          </a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="project-page.html">
                <img
                  src="./img/projects/01.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="project-page.html">
                <img
                  src="./img/projects/02.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="project-page.html">
                <img
                  src="./img/projects/03.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="project-page.html">
                <img
                  src="./img/projects/04.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Dating app</h3>
              </a>
            </li>
            <li className="project">
              <a href="project-page.html">
                <img
                  src="./img/projects/05.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Landing</h3>
              </a>
            </li>
            <li className="project">
              <a href="project-page.html">
                <img
                  src="./img/projects/06.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Gaming community</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={vk} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={twitter} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2022 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
