import { useState } from "react";
import PhotoControls from "./PhotoControls.jsx";
function Hero() {
    const heroImages = [
        "/synth-hero.png",
        "https://media.istockphoto.com/id/2265782336/photo/futuristic-megacity-skyline-with-advanced-skyscraper-architecture-autonomous-aerial-vehicles.webp?a=1&b=1&s=612x612&w=0&k=20&c=zqt46iwq_mpdDgiQV18x-xovJspJnWd0mn7JK-rV_qY=",
        "https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % heroImages.length);
    };
    const handlePreviousImage = () => {
        setCurrentImage((currentImage - 1 + heroImages.length) 
        % heroImages.length);
    };

    const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);
    const [isSepia, setIsSepia] = useState(false);

    const [blurAmount, setBlurAmount] = useState(0);

    return (
        <section className="hero">
            <img src= {heroImages[currentImage]} 
           style={{
  filter: `${
    isBlackAndWhite
      ? "grayscale(100%)"
      : isSepia
        ? "sepia(100%)"
        : ""
  } blur(${blurAmount}px)`
}}
            alt= "Futuristic Cityscape"
            />

            <div className="hero-text">
            <h2> Welcome to The Synth Nova Chronicles Universe</h2>
            <p>Where creativity, technology, and storytelling 
                converge.</p>
            </div>

            <div className="hero-controls">
              <PhotoControls
              onNext={handleNextImage}
              onPrevious={handlePreviousImage}
              onColor={()=> {
                setIsBlackAndWhite(false);
                setIsSepia(false);
              }}
              onBlackAndWhite={() =>{
                setIsBlackAndWhite(true);
                setIsSepia(false);
              }}
              /> 
           
      <button
        onClick={() => {
            console.log("Black & White button clicked");
          setIsSepia(previous => !previous);
          setIsBlackAndWhite(false);
        }}
        >
        {isSepia ? "Remove Sepia" : "Apply Sepia"}
      </button>

      <button onClick={() => {
        setIsBlackAndWhite(false);
        setIsSepia(false);
        setBlurAmount(0);
      }}>
        Reset Filters
      </button>

      <button onClick={() => setBlurAmount(previous => previous + 1)}>
  Increase Blur : {blurAmount}px
</button>

<button 
onClick={() => setBlurAmount(previous => Math.max(previous - 1, 0))}>
  Decrease Blur : {blurAmount}px
</button>
    </div>
  </section>
);
}

// Removed extra closing brace
export default Hero;