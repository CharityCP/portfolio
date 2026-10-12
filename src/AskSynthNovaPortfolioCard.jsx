import { useState } from "react";
function AskSynthNovaPortfolioCard() {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(previous => previous + 1);
    };
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
        setShowMore(previous => !previous);
    };
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
            <button 
            className= "show-more" 
            onClick={handleShowMore}>
                {showMore ? "Show Less" : "Show More"}
            </button>
            {showMore && (
                <p> Ask Synth Nova is an interactive 
                    character and world-building
    database developed for Synth Nova Chronicles.
    Using JavaScript and CSV data, visitors can search
    for information about characters, their abilities, 
    relationships, and significant events.
    </p>
            )}
            
    <p>The experience introduces three major  factions:
     Unity Nexus, the Dominion Collective, and the 
     Dissenters. It combines original science-fiction 
     storytelling with data retrieval and interactive 
     web development..</p>
        
            <a href={liveUrl}> Live site</a>
            <a href={githubUrl} >GitHub</a>
            <button 
            className= "like-button"
            onClick={handleLike}>
                Like ({likes})
                </button>
        </article>
    )
}
      export default AskSynthNovaPortfolioCard;