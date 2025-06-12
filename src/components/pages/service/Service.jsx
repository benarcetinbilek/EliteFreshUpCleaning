import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./service.css";

const services = [
  {
    id: 0,
    header: "Deep Cleaning",
    description:
      "Our deep cleaning service targets hidden dirt, grime, and buildup in your home or office, ensuring a truly fresh environment.",
    src: "/assets/1.jpg",
  },
  {
    id: 1,
    header: "Hand Sanitization Service",
    description:
      "We offer professional hand sanitization services for shared spaces, ideal for businesses and high-traffic areas.",
    src: "/assets/2.jpg",
  },
  {
    id: 2,
    header: "Spring or Fall Cleaning",
    description:
      "Prepare your space for the season with our thorough spring or fall cleaning, focusing on dust, windows, and forgotten areas.",
    src: "/assets/3.jpg",
  },
  {
    id: 3,
    header: "Same Day Cleaning",
    description:
      "Need emergency cleaning? Our same-day service ensures your home or business is spotless in just a few hours.",
    src: "/assets/4.jpg",
  },
  {
    id: 4,
    header: "Move-Out Cleaning",
    description:
      "Moving out? Leave your space spotless for the next tenant with our detailed move-out cleaning service.",
    src: "/assets/5.jpg",
  },
  {
    id: 5,
    header: "Recurring Cleaning",
    description:
      "Enjoy peace of mind with our scheduled recurring cleaning services — weekly, bi-weekly, or monthly.",
    src: "/assets/6.jpg",
  },
  {
    id: 6,
    header: "Small Business Cleaning",
    description:
      "We specialize in affordable and reliable cleaning solutions tailored to the needs of small businesses.",
    src: "/assets/7.jpg",
  },
  {
    id: 7,
    header: "Holiday Cleaning",
    description:
      "Hosting guests? Our holiday cleaning service ensures your home shines during special occasions and family gatherings.",
    src: "/assets/8.jpg",
  },
  {
    id: 8,
    header: "Apartment Cleaning",
    description:
      "Perfect for city living, our apartment cleaning service covers every corner, leaving your space spotless.",
    src: "/assets/9.jpg",
  },
  {
    id: 9,
    header: "Move-In Cleaning",
    description:
      "Start fresh in your new space with our move-in cleaning, eliminating dust and residue from previous occupants.",
    src: "/assets/10.jpg",
  },
  {
    id: 10,
    header: "Window Cleaning Services",
    description:
      "Crystal-clear windows inside and out — we clean residential and commercial windows with streak-free results.",
    src: "/assets/11.jpg",
  },
  {
    id: 11,
    header: "Carpet Cleaning Services",
    description:
      "Remove stains, dust, and allergens from your carpets with our deep extraction cleaning technology.",
    src: "/assets/12.jpg",
  },
  {
    id: 12,
    header: "Special Cleaning Services",
    description:
      "From post-construction cleanup to event aftermath, our special services meet unique cleaning needs.",
    src: "/assets/13.jpg",
  },
  {
    id: 13,
    header: "Housekeeping Services",
    description:
      "Regular housekeeping made easy — we handle dusting, laundry, tidying, and more so you can relax.",
    src: "/assets/14.jpg",
  },
  {
    id: 14,
    header: "Post-Renovation Cleaning",
    description:
      "Remove construction dust and debris with our expert post-renovation cleanup service.",
    src: "/assets/15.jpg",
  },
  {
    id: 15,
    header: "Bathroom Cleaning Services",
    description:
      "Disinfected and sparkling — our bathroom cleaning removes grime, limescale, and odors efficiently.",
    src: "/assets/16.jpg",
  },
  {
    id: 16,
    header: "Green Cleaning Services",
    description:
      "Eco-friendly cleaning using non-toxic, biodegradable products safe for families and pets.",
    src: "/assets/17.jpg",
  },
  {
    id: 17,
    header: "Advanced Vacuuming Service",
    description:
      "Our vacuum cleaner pros target dirt, allergens, and fine particles in carpets and upholstery.",
    src: "/assets/18.jpg",
  },
  {
    id: 18,
    header: "Appliance Cleaning Services",
    description:
      "We deep-clean your kitchen appliances — ovens, fridges, microwaves — restoring them to like-new condition.",
    src: "/assets/19.jpg",
  },
];

const Service = () => {
  const params = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let id = params.id;

  if (!id || isNaN(id) || id < 0 || id >= services.length) {
    id = 0;
  }

  const service = services.find((s) => s.id === parseInt(id));

  return (
    <div className="servicePageContainer">
      <Navbar />
      <div className="servicePageContentWrapper">
        <div className="serviceExplanation">
          <h1>{service.header}</h1>
          <p>{service.description}</p>
        </div>

        {!isMobile && (
          <div className="serviceImg">
            <img src={service.src} alt="Service" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
