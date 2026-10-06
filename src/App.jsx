
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico/css/pico.min.css";
import Hero from "./Hero";
import AskSynthNovaPortfolioCard from "./AskSynthNovaPortfolioCard";
import ClickLabQuizPortfolioCard from "./ClickLabQuizPortfolioCard";
import Contact from "./Contact";
import Quote from "./Quote";
import Footer from "./Footer";
import Name from "./Name";
import JobTitle from "./JobTitle";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";


function App() {
  return (
    <div className="portfolio">
      <Name />
      <Hero />
      <JobTitle />
      <AboutMe />
      <Education />
      <Skills />
      <AskSynthNovaPortfolioCard />
      <ClickLabQuizPortfolioCard />
      <Contact />
      <Quote />
      <Footer />
    </div>
  )
}

export default App