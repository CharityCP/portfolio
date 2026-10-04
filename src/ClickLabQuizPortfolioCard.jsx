function ClickLabQuizPortfolioCard() {
    let name = " ClickLab Quiz";
    let description = "A fun and interactive quiz experience where visitors can test their knowledge and have a great time";
    let liveUrl = "https://charitycp.github.io/Synth-Click-Lab/";
    let githubUrl = "https://github.com/CharityCP/Synth-Click-Lab";
    return (
        <article>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={liveUrl}> Live site</a>
            <a href={githubUrl} >GitHub</a>
        </article>
    )
}
export default ClickLabQuizPortfolioCard;
