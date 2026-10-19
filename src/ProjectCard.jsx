import { useState } from "react";
function ProjectCard({ project}) {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(previous => previous + 1);
    };
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
        setShowMore(previous => !previous);
    };
    
    return (
        <article className= "project-card">
            <img src={project.image} 
            alt={project.name} 
            className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button
            className= "show-more" 
            onClick={handleShowMore}>
                {showMore ? "Show Less" : "Show More"}
            </button>
            {showMore && (
                <p>{project.details}</p>
            )}
            
        
            <a href={project.liveUrl}> Live site</a>
            <a href={project.repoUrl} >GitHub</a>
            <button 
            className= "like-button"
            onClick={handleLike}>
                Like ({likes})
                </button>
        </article>
    )
}
      export default ProjectCard