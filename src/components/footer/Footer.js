import "./style.css";

import vk from "./../../img/icons/vk.svg";
//import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
//import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://vk.com/garich1994"
                target="_blank"
                rel="noreferrer"
              >
                <img src={vk} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a
                href="https://twitter.com/Alex_Garkavenko?t=gp1d43mlkGH8Ne6mhsgFxQ&s=09"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a
                href="https://github.com/garich94"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>
              Всё под чутким руководством команды{" "}
              <a
                href="https://www.guidedao.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                guidedao
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
