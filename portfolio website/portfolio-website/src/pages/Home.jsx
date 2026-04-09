import Navbar from "../components/Navbar";
import Education from "../components/Education";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Project />
      <Education />
      <Contact />
    </>
  );
};

export default Home;