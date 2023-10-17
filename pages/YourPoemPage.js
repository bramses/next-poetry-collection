import PoemVerse from "../components/PoemVerse";
import ComputationComponent from "../components/ComputationComponent";
import { useEffect } from "react";

const YourPoemPage = () => {
    useEffect(() => {
        let isScrolling = false;
    
        const handleScroll = (event) => {
          if (isScrolling) return;  // If we're already scrolling, we skip
    
          isScrolling = true;
    
          // Determine the direction of the scroll
          const direction = event.deltaY > 0 ? 'down' : 'up';
        
          if (direction === 'down') {
            // Scroll down to next stanza
            window.scrollBy({
              top: window.innerHeight,  // Full height of the viewport
              behavior: 'smooth'
            });
          } else {
            // Scroll up to previous stanza
            window.scrollBy({
              top: -window.innerHeight,  // Negative for scrolling up
              behavior: 'smooth'
            });
          }
    
          // Reset scrolling flag after animation completes
          setTimeout(() => {
            isScrolling = false;
          }, 1000);  // Assuming the smooth scrolling takes about 1s
        };
    
        // Adding the event listener
        document.addEventListener('wheel', handleScroll);
    
        // Cleanup: Remove event listener when component unmounts
        return () => {
          document.removeEventListener('wheel', handleScroll);
        };
      }, []); // The empty dependency array means this effect will run once when the component mounts

  return (
    <>
      <div className="poemContainer">
        <div className="verse">
          <PoemVerse stanza="Your first stanza here..." />
        </div>
        <div className="computation">
          <ComputationComponent
            type="image"
            content="path_to_your_image_or_other_content"
          />
        </div>
      </div>

      <div className="poemContainer">
        <div className="verse">
          <PoemVerse stanza="Your second stanza here..." />
        </div>
        <div className="computation">
          <ComputationComponent
            type="video"
            content="path_to_your_video_or_other_content"
          />
        </div>
      </div>

      {/* Add more stanzas and computations as needed */}
    </>
  );
};

export default YourPoemPage;
