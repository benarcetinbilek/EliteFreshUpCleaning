import { useEffect, useState } from "react";
import { Instagram, Yelp } from "../../icons/icons";
import "./sectionOne.css";

const SectionOne = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // İlk renderda kontrol et
    handleResize();

    // Resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="homePicture">
      <img src="/main.png" alt="Main" className="backgroundImage" />
      <div className="overlayLayer"></div>
      <div className="overlayContent">
        <h1>TOP-RATED CLEANİNG SERVİCE</h1>
        <h1>ELİTE FRESH UP CLEANİNG</h1>
        <div className="overlayCom">
          <button className="homeBook">Get a Quote</button>
          <button className="phone">+1 628 295-5859</button>
        </div>
      </div>

      <div className="halfOverlappingContainer">
        {!isMobile && (
          <div className="halfOverlappingContainerLeft">
            <h2>Reach Us</h2>
            <p>For top-quality cleaning for homes, offices, and more...</p>
          </div>
        )}

        <div className="halfOverlappingContainerRight">
          <div
            className="halfOverlappingContainerRightInstagram"
            onClick={() => console.log("Instagram Clicked")}
          >
            <Instagram className="halfOverLappingIcon" />
          </div>
          <p>Yelp</p>
          <div
            className="halfOverlappingContainerRightYelp"
            onClick={() => console.log("Yelp Clicked")}
          >
            <Yelp className="halfOverLappingIcon halfOverLappingIconYelp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
