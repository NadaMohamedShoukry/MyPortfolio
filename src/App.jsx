import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import "./index.css";
import { Courses } from "./components/Courses/Courses";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Education />
      {/* <Skills /> */}
      <Experience />
      <Projects />
      <Courses />
      <Contact />
      <Outlet />
    </div>
  );
}

export default App;
