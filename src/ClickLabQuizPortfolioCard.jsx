import { useState } from "react";
function ClickLabQuizPortfolioCard() {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(previous => previous + 1);
    };
    let name = " ClickLab Quiz";
    let description = "A fun and interactive quiz experience where visitors can test their knowledge and experience in depth exploration of the Synth Nova storyline.";
    let liveUrl = "https://charitycp.github.io/Synth-Click-Lab/";
    let githubUrl = "https://github.com/CharityCP/Synth-Click-Lab";
    return (
        <article className= "project-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={liveUrl}> Live site</a>
            <a href={githubUrl} >GitHub</a>
            <button 
            className = "like-button"
            onClick={handleLike}>
                Like ({likes})
                </button>
        </article>
    )
}
export default ClickLabQuizPortfolioCard;
