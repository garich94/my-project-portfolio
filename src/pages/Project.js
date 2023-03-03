import { useParams } from "react-router-dom";
import BtnGitHub from "../components/buttonGitHub/BtnGitHub";
import { projects } from "../helpers/projectList";
import BtnLinkProject from "../components/btnLinkProject/BtnLinkProject";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.imgBig}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>
          <BtnLinkProject link={project.linkProject} />
          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default Project;
