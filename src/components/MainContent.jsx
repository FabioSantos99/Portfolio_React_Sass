import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import TecnologiesContainer from "./TecnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

const MainContent = () => {
  return <main id="main-content">

    <AboutContainer />
    <TecnologiesContainer />
    <ProjectsContainer />
  </main>
  
};

export default MainContent