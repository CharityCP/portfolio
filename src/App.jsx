import Contact from "./Contact";
import Quote from "./Quote";
function Name() {
  return <h1>Charity Perkins</h1>
}

function JobTitle() {
  return <h2 classname="job-title">Creator & Developer- Synth Nova Chronicles</h2>
}
 
function AboutMe () {
  return (
  <>
  <h2 className="section-title">About Me</h2>
         <p> I am the creator and developer of Synth Nova Chronicles, an original science-fiction project combining, storytelling, character development, technology,immersive world-building and interactive web experiences.</p>
  </>
  )
}

function Education() {
  return (
    <>
    
    <h2 className="section-title"> Education & Certifications</h2>
    <h3> Southeastern Louisiana University  </h3>
    <p> Bachelor's Degree in Visual Arts- Concentration in Painting</p>
    <h3> University of Phoenix </h3>
    <p> Masters Degree in Secondary Education</p>
    <h3> Georgia Professional Standards Commission</h3>
    <p> Level 5 Professional Level Certification- Curriculum & Instruction</p>
    <h3> Codex Academy</h3>
    <p> Certification in Front End Full-Stack Web Development</p>
    </>
  )
}

function Skills() {
  const skills=[
"Visual Design",
"Curriculum & Instructional Design",
"Web Development",
"Project Management",
"HTML & CSS",
"JavaScript & React",
"Git & GitHub",
"API & Data Integration",
"Storytelling & World-Building"
  ];

  return ( 
    <>
    <h2 className ="section-title">Skills ({skills.length})</h2>
    <ul className="skills-grid">
     {skills.map((skill, index) => (
       <li key={index}>{skill}</li>
     )) }
    </ul>
    </>
  )
}


function Footer() {
  return <p className="footer">&copy; {new Date().getFullYear()} Synth Nova Chronicles</p>
}

function App() {
  return (
    <div className="portfolio">
      <Name />
      <JobTitle />
      <AboutMe />
      <Education />
      <Skills />
      <Contact />
      <Quote />
      <Footer />
    </div>
  )
}

export default App