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

  const [errors, setErrors] = useState({});

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
              <p>+1(754) 275-5533</p>
            </div>
          </div>

          <div className="infoItem">
            <span className="icon">
              <OutlineWatchLater />
            </span>
            <div>
              <strong>Work Hrs</strong>
              <p>Sun - Sat : 7:00 AM - 10:00 PM</p>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
