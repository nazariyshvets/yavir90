import { BiPhone } from "react-icons/bi";

import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList.tsx";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsList />

      <section>
        <h1 className="text-center text-xl font-bold">Контакти</h1>

        <div>
          <div className="flex items-center">
            <BiPhone /> +38 050 980 25 00
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
