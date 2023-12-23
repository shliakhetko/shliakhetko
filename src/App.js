import { Footer } from "./sections/Footer/Footer";
import { ContactMe } from "./sections/ContactMe/ContactMe";
import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Introduction } from "./sections/Introduction/Introduction";
import { Knowledge } from "./sections/Knowledge/Knowledge";
import { Projects } from "./sections/Projects/Projects";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Introduction />
        <AboutMe />
        <Knowledge />
        <Projects/>
        <ContactMe />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
