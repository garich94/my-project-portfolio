import Project from "../components/project/Project";

import { projects } from "../helpers/projectList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {console.log(projects(0))}

          <Project />
        </ul>
      </div>
    </main>
  );
};

export default Projects;
