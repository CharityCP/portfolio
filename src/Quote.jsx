import {useState} from "react";
const fortunes = [
    "Believe in the vision you carry, especially when you're the only one who can see it.",
    "The future has always belonged to those willing to build what doesn't exist.",
    "Innovation begins when imagination meets action.",
    "Every challenge is an opportunity to grow.",
    "Your next great idea starts with a single thought."
];



function Quote() {
    const [fortuneIndex, setFortuneIndex] = useState(0);
   function nextFortune() {
    setFortuneIndex((prevIndex) => (prevIndex + 1) % fortunes.length);
   }
    return (
      <blockquote className="quote-card ">
           <p> {fortunes[fortuneIndex]} </p>
           <button 
           className="next-fortune-button"
           onClick={nextFortune}>Next Fortune</button>
            <cite>-Charity Perkins</cite>
            </blockquote>
    );
}

export default Quote;
    