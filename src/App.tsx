import ContactMe from "./components/contact-me/contact-me";
import Domain from "./components/domain/domain";
import Main from "./components/main/main";
import ProjectPage from "./components/projects-page/project-page";
import WhyHireMe from "./components/why-hire-me";
import WorkExp from "./components/work-exp/work-exp";

function App() {
  return (
    <div className="h-full">
      <Main />
      <Domain />
      <WorkExp />
      <WhyHireMe />
      <ProjectPage />
      <ContactMe />
    </div>
  );
}

export default App;
