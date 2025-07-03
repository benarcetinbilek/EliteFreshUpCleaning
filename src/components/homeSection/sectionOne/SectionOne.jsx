import { useEffect, useState } from "react";
import { Instagram, Yelp } from "../../icons/icons";
import "./sectionOne.css";
import { useNavigate } from "react-router-dom";

const SectionOne = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

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
      <img src="/assets/2.jpg" alt="Main" className="backgroundImage" />
      <div className="overlayLayer"></div>
      <div className="overlayContent">
        <h1>DETAİLED - RELİABLE - PROFESSİONAL</h1>
        <h1>ELİTE FRESHUP CLEANİNG SERVİCES</h1>
        <div className="overlayCom">
          <button className="homeBook" onClick={() => navigate("/book")}>
            Get a Quote
          </button>
          <button className="phone">657 263 7999</button>
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
            onClick={() =>
              window.open(
                "https://www.yelp.com/biz/elite-freshup-cleaning-services-los-angeles?uid=goF9bAjLJJ-0h8Jhqm2JHg&utm_source=ishare"
              )
            }
          >
            <Yelp className="halfOverLappingIcon halfOverLappingIconYelp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
