import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";
import Contacts from "../components/Contacts";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsList />
      <Contacts />
    </div>
  );
};

export default HomePage;
