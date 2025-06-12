import { useNavigate } from "react-router-dom";
import "./services.css";
import {
  VacuumCleaner,
  BaselineCleanHands,
  BaselineDryCleaning,
  OutlineCleaningServices,
  TravelWafinderSinkWashCleanToiletBathroomWater,
  FacialCleanser,
  HotelPleaseClean,
  HotelDoNotClean,
  VacuumCleanerTwo,
  Cleaning,
  CleaningBucketOutline,
  CleaningBucketOutlineTwo,
  Clean,
  PersonalHygieneCleanBottleShield,
  CleaningBucket,
  CleaningTwo,
  SilverwareClean,
  VacuumCleanerThree,
} from "../icons/servicesIcons";

const Services = () => {
  const services = [
    {
      src: <VacuumCleaner className="serviceIcon" />,
      text: "Deep Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: <BaselineCleanHands className="serviceIcon" />,
      text: "asd",
      descpriction: "qweqwe",
    },
    {
      src: <BaselineDryCleaning className="serviceIcon" />,
      text: "Spring or Fall Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: <OutlineCleaningServices className="serviceIcon" />,
      text: "Same Day Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: (
        <TravelWafinderSinkWashCleanToiletBathroomWater className="serviceIcon" />
      ),
      text: "Move-Out Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: <FacialCleanser className="serviceIcon" />,
      text: "Recurring Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: <HotelPleaseClean className="serviceIcon" />,
      text: "Small Business Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: <HotelDoNotClean className="serviceIcon" />,
      text: "Holiday Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: <VacuumCleanerTwo className="serviceIcon" />,
      text: "Apartment Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: <Cleaning className="serviceIcon" />,
      text: "Move-In Cleaning",
      descpriction: "qweqwe",
    },
    {
      src: <CleaningBucketOutline className="serviceIcon" />,
      text: "Window Cleaning Services",
      descpriction: "qweqwe",
    },
    {
      src: <CleaningBucketOutlineTwo className="serviceIcon" />,
      text: "Carpet Cleaning Services",
      descpriction: "qweqwe",
    },
    {
      src: <Clean className="serviceIcon" />,
      text: "Special Cleaning Services",
      descpriction: "qweqwe",
    },
    {
      src: <PersonalHygieneCleanBottleShield className="serviceIcon" />,
      text: "Housekeeping Services",
      descpriction: "qweqwe",
    },
    {
      src: <CleaningBucket className="serviceIcon" />,
      text: "Post-Renovation Cleaning Services",
      descpriction: "qweqwe",
    },
    {
      src: <CleaningTwo className="serviceIcon" />,
      text: "Bathroom Cleaning Services",
      descpriction: "qweqwe",
    },
    {
      src: <SilverwareClean className="serviceIcon" />,
      text: "Green Cleaning Services",
      descpriction: "qweqwe",
    },
    {
      src: <VacuumCleanerThree className="serviceIcon" />,
      text: "Green Cleaning Services",
      descpriction: "qweqwe",
    },
    {
      src: <BaselineCleanHands className="serviceIcon" />,
      text: "Appliance Cleaning Services",
      descpriction: "qweqwe",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="servicesContainer">
      <h1>SERVİCES WE PROVİDE</h1>
      <div className="servicesWrapper">
        {services.map((services, i) => {
          return (
            <div
              key={i}
              className="serviceContainer"
              onClick={() => {
                navigate(`/service/${i}`);
              }}
            >
              <div className="serviceIconBox">{services.src}</div>
              <h1>{services.text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
