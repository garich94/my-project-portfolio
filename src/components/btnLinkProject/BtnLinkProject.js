import "./style.css";

const BtnLinkProject = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      Перейти на сайт проекта
    </a>
  );
};

export default BtnLinkProject;
