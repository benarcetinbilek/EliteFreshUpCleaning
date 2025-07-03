import "./book.css";
import Navbar from "../../navbar/Navbar";
import { useState } from "react";
import Footer from "../../footer/Footer";
import {
  BaselineAlternateEmail,
  OutlineWatchLater,
  SomeInstagram,
  TwotonePhoneInTalk,
} from "../../icons/icons";

const Book = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
  });

  const [extras, setExtras] = useState([
    {
      id: 1,
      title: "Deep Clean",
      description: "Recommended if last cleaning was 1-2 months ago",
      longDescription: "A thorough cleaning service for homes cleaned recently",
      ifCount: false,
      selected: false,
      src: "/extraIcons/deep-cleaning.svg",
    },
    {
      id: 2,
      title: "Double Deep Clean",
      description: "Recommended if last cleaning was 3+ months ago",
      longDescription:
        "Ideal for homes that haven't been cleaned in a long time",
      ifCount: false,
      selected: false,
      src: "/extraIcons/double-deep-cleaning.svg",
    },
    {
      id: 3,
      title: "Post-Construction",
      description: "For homes after renovation",
      longDescription: "Removes dust, paint residue, and post-build debris",
      ifCount: false,
      selected: false,
      src: "/extraIcons/post-constraction.svg",
    },
    {
      id: 4,
      title: "Inside the Fridge",
      description: "Interior of the fridge will be cleaned",
      longDescription: "Deep cleaning of fridge shelves and drawers",
      ifCount: false,
      selected: false,
      src: "/extraIcons/inside-the-fridge.svg",
    },
    {
      id: 5,
      title: "Inside the Oven",
      description: "Interior of the oven will be cleaned",
      longDescription: "Degreasing and deep cleaning of oven surfaces",
      ifCount: false,
      selected: false,
      src: "/extraIcons/inside-the-oven.svg",
    },
    {
      id: 6,
      title: "Hand Wipe Baseboards",
      description: "Detailed hand cleaning of baseboards",
      longDescription: "Includes scrubbing and dirt removal from trim areas",
      ifCount: false,
      selected: false,
      src: "/extraIcons/hand-wipe-baseboards.svg",
    },
    {
      id: 7,
      title: "Dish Washing",
      description: "Per sinkful",
      longDescription: "Number of sinkfuls must be specified",
      ifCount: true,
      selected: false,
      count: 1,
      src: "/extraIcons/dish-washing.svg",
    },
    {
      id: 8,
      title: "Inside Kitchen Cabinets",
      description: "Interior of cabinets will be cleaned",
      longDescription: "Crumbs, spills, and stains will be wiped out",
      ifCount: false,
      selected: false,
      src: "/extraIcons/inside-kitchen-cabinets.svg",
    },
    {
      id: 9,
      title: "Deep Cleaning of Blinds",
      description: "Detailed blind cleaning",
      longDescription: "Hand-wiped or vacuumed depending on material",
      ifCount: false,
      selected: false,
      src: "/extraIcons/deep-cleaning-of-blinds.svg",
    },
    {
      id: 10,
      title: "interior window",
      description: "Interior window glass and frames",
      longDescription: "Cleaning of smudges, dirt, and debris from inside",
      ifCount: false,
      selected: false,
      src: "/extraIcons/interior-window.svg",
    },
    {
      id: 11,
      title: "Exterior Window Cleaning",
      description: "Outside window cleaning",
      longDescription: "Reachable exterior windows will be cleaned",
      ifCount: false,
      selected: false,
      src: "/extraIcons/exterior-window-cleaning.svg",
    },
    {
      id: 12,
      title: "Sweep Balcony, Patio, or Garage",
      description: "Outdoor floor sweep-up",
      longDescription: "Removes dust, leaves, and debris from outdoor areas",
      ifCount: false,
      selected: false,
      src: "/extraIcons/sweep-balcony.svg",
    },
    {
      id: 13,
      title: "Wipe Ceiling Fans",
      description: "Cleaning of fan blades and motor housing",
      longDescription: "Dust will be wiped from all reachable ceiling fans",
      ifCount: false,
      selected: false,
      src: "/extraIcons/wipe-ceiling-fans.svg",
    },
    {
      id: 14,
      title: "Wash, Dry, and Fold Laundry",
      description: "Laundry service included",
      longDescription: "1 load of laundry washed, dried, and folded",
      ifCount: true,
      selected: false,
      count: 1,
      src: "/extraIcons/laundry.svg",
    },
    {
      id: 15,
      title: "Pet Hair Removal",
      description: "Remove pet hair from floors and surfaces",
      longDescription: "Detailed vacuuming and lint removal from furniture",
      ifCount: false,
      selected: false,
      src: "/extraIcons/pet.svg",
    },
    {
      id: 16,
      title: "Green/Eco Friendly Products",
      description: "Non-toxic, eco-safe cleaning supplies",
      longDescription: "All cleaning will be performed with eco products",
      ifCount: false,
      selected: false,
      src: "/extraIcons/eco-friendly.svg",
    },
  ]);

  const [errors, setErrors] = useState({});

  const toggleExtra = (id) => {
    setExtras((prev) =>
      prev.map((extra) =>
        extra.id === id ? { ...extra, selected: !extra.selected } : extra
      )
    );
  };

  const updateCount = (id, value) => {
    setExtras((prev) =>
      prev.map((extra) =>
        extra.id === id ? { ...extra, count: value } : extra
      )
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    // Hata varsa kaldır
    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.phone)
      newErrors.phone = "This field is required. Please input a phone number.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "This field is required. Please input a valid email.";
    if (!form.address)
      newErrors.address =
        "This field is required. Please enter the street address.";
    if (!form.date) newErrors.date = "This field is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Submitted!", form);
      // You can reset or send data here
    }
  };

  return (
    <div className="bookContainer">
      <Navbar />
      <div className="bookPicContainer">
        <img src="a.png" alt="banner" />
        <h1 className="bookPicText">Let's Talk</h1>
      </div>
      <div className="bookFormContainer">
        <div className="formWrapper">
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Please Fill Out This Form
          </h1>
          <form className="bookForm" onSubmit={handleSubmit} noValidate>
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <div className="two-col">
              <div>
                <label>Phone Number *</label>
                <input
                  type="number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div>
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>

            <label>Street Address *</label>
            <input
              type="text"
              name="address"
              placeholder="E.g. 42 Wallaby Way"
              value={form.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}

            <label>Choose a Cleaning Date *</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}

            <div className="extrasGrid">
              {extras.map((extra) => (
                <div
                  key={extra.id}
                  className={`extraItem ${extra.selected ? "selected" : ""}`}
                  onClick={() => toggleExtra(extra.id)}
                >
                  {extra.ifCount && !extra.selected && (
                    <img
                      src={extra.src}
                      alt={extra.title}
                      className="extraIcon"
                    />
                  )}
                  {extra.selected && extra.ifCount && (
                    <input
                      type="number"
                      value={extra.count}
                      min="1"
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) =>
                        updateCount(extra.id, parseInt(e.target.value) || 1)
                      }
                      className="countInput"
                    />
                  )}

                  <h4>{extra.title}</h4>
                  {/* <p className="shortDesc">{extra.description}</p> */}

                  {/* Tooltip kutusu */}
                  <div className="tooltipBox">{extra.longDescription}</div>
                </div>
              ))}
            </div>

            <button type="submit" className="sendBtn">
              Send Message
            </button>
          </form>
        </div>

        <div className="bookContactInfo">
          <h1>Get A Free Estimate</h1>
          <div className="infoItem">
            <span className="icon">
              <TwotonePhoneInTalk />
            </span>
            <div>
              <strong>Number</strong>
              <p>855 551 5445</p>
            </div>
          </div>

          <div className="infoItem">
            <span className="icon">
              <OutlineWatchLater />
            </span>
            <div>
              <strong>Work Hrs</strong>
              <p>Mon - Sun: 7:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div className="infoItem">
            <span className="icon">
              <BaselineAlternateEmail />
            </span>
            <div>
              <strong>Location</strong>
              <p>California</p>
            </div>
          </div>

          <div className="infoItem">
            <span className="icon">
              <SomeInstagram />
            </span>
            <div>
              <strong>Follow Our Instagram</strong>
            </div>
          </div>
          <div className="priceContainer">
            <div className="priceWrapper">Total: 239.99$</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
