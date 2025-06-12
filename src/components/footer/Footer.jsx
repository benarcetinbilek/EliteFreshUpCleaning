import { useNavigate } from "react-router-dom";
import {
  BaselineAlternateEmail,
  TravelMapLocationPinNavigationMapMapsPinGpsLocation,
  TwotonePhoneInTalk,
  Facebook,
  SomeInstagram,
  TwitterXFill,
} from "../icons/icons";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    { name: "Services", url: "/services" },
    { name: "About Us", url: "/aboutus" },
    { name: "Gallery", url: "/gallery" },
    { name: "Book now", url: "/book" },
  ];

  return (
    <div className="footerContainer">
      <div className="footeLogo">LOGO</div>
      <div className="footerLinks">
        <div className="footerLinksWrapper">
          {footerLinks.map((link, i) => {
            return (
              <p
                onClick={() => {
                  navigate(`${link.url}`);
                }}
              >
                {link.name}
              </p>
            );
          })}
        </div>
        <div className="footerLinksCopyright">
          <p>
            © {new Date().getFullYear()} Elite Fresh Up. All rights reserved.
          </p>
        </div>
      </div>
      <div className="footerContact">
        <h1>CONTACT US</h1>
        <div className="footerContactUs">
          <TwotonePhoneInTalk />

          <p>123123123 </p>
        </div>
        <div className="footerContactUs">
          <BaselineAlternateEmail />

          <p>asdasdasd@email</p>
        </div>
        <div className="footerContactUs">
          <TravelMapLocationPinNavigationMapMapsPinGpsLocation />

          <p>adressadressadress</p>
        </div>
        <div className="footerContactUs links">
          <Facebook /> <SomeInstagram /> <TwitterXFill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
