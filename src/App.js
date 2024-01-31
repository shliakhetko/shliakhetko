import { Footer } from "./sections/Footer/Footer";
import { ContactMe } from "./sections/ContactMe/ContactMe";
import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Introduction } from "./sections/Introduction/Introduction";
import { Knowledge } from "./sections/Knowledge/Knowledge";
import { Projects } from "./sections/Projects/Projects";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daniel Shliakhetko - Front-end Developer</title>
        <meta name="description" content="I am junior frontend developer, the one you definitely need. I have been learning Front-end technologies for 2 years straight. During this time I’ve worked on 10+ Projects." />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
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
