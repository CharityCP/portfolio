function AskSynthNovaPortfolioCard() {
    let name = " Ask Synth Nova";
    let description = "An interactive story experience where visitors can ask questions and explore the world of Synth Nova";
    let liveUrl = "https://charitycp.github.io/Ask-Synth-Nova/";
    let githubUrl = "https://github.com/CharityCP/Ask-Synth-Nova";
    return (
        <article className= "project-card">
            <img src="/synth-nova.jpg" 
            alt="Synth Nova" 
            className="project-image" />
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={liveUrl}> Live site</a>
            <a href={githubUrl} >GitHub</a>
        </article>
    )
}
      export default AskSynthNovaPortfolioCard;