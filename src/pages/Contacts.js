const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>
              <a
                href="https://yandex.ru/maps/38/volgograd/?ll=44.646651%2C48.685105&z=11.52"
                target="_blank"
                rel="noreferrer"
              >
                Volgograd, Russia
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram/Discord</h2>
            <p>
              <a
                href="https://www.guidedao.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                @Garich14
              </a>
              /garich94#6402
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:garkavenkoaa@yandex.ru">garkavenkoaa@yandex.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
