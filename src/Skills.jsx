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
export default Skills;