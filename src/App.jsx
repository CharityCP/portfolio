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