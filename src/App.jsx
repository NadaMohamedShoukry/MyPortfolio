import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import "./index.css";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Education />
      {/* <Skills /> */}
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
