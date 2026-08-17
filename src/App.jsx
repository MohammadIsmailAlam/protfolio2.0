import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { About } from "./components/sections/About.jsx";
import { Skills } from "./components/sections/Skills.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Experience } from "./components/sections/Experience.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { ExtraWork } from "./components/sections/ExtraWorks.jsx";
import Portfolio from "./components/sections/Portfolio.jsx";

/**
 * App — composition root. Sections are pure, self-contained, and read
 * their own content from siteConfig.js, so this file only ever needs to
 * change when the *order* or *presence* of a section changes.
 */
export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Portfolio />
        <ExtraWork />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
