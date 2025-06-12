import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import "./gallery.css";

const Gallery = () => {
  const images = [
    { src: "assets/1.jpg", alt: "Image 1" },
    { src: "assets/2.jpg", alt: "Image 2" },
    { src: "assets/3.jpg", alt: "Image 3" },
    { src: "assets/4.jpg", alt: "Image 4" },
    { src: "assets/5.jpg", alt: "Image 5" },
    { src: "assets/6.jpg", alt: "Image 6" },
  ];

  return (
    <div className="galleryContainer">
      <Navbar />
      <div className="bookPicContainer">
        <img src="a.png" alt="banner" />
        <h1 className="bookPicText">HOUSES WE CLEAN</h1>
      </div>
      <div className="galleryWrapper">
        {images.map((img, i) => {
          return (
            <div className="imageContainer">
              <img className="galleryImg" src={img.src} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
