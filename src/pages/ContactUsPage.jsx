import React from "react";
//import ContactUs from "../components/ContactUs";
import { useState, useEffect } from "react";

function ContactUsPage() {
  const [userContact, setUserContact] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [sucessMessage, setSucessMessage] = useState("");
  const [isSubmit, setSubmit] = useState(false);

  const [formError, setFormError] = useState({});

  const handleInput = (e) => {
    // const {name,value} = e.target;
    const name = e.target.name;
    const value = e.target.value;
    setUserContact({ ...userContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(userContact));
    setUserContact({
      name: "",
      email: "",
      phone_number: "",
      message: "",
    });
    setTimeout(myGreeting, 5000);
    setSubmit(true);
  };
  const validateForm = (value) => {
    const errors = {};

    if (!value.name) {
      errors.name = "Please Enter Name";
    }
    if (!value.email) {
      errors.email = "Please Enter Email";
    }
    if (!value.phone_number) {
      errors.phone_number = "Please Enter Phone Number";
    }
    if (!value.message) {
      errors.message = "Please Enter Phone Message";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      setSucessMessage("Thank You For Contact Us We Will Contact You Soon");
    }
  }, [formError, userContact, isSubmit]);
  const myGreeting = () => {
    setSucessMessage("");
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Now</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h2 style={{ color: "#00ff40", marginLeft: 200 }}>
                {sucessMessage}
              </h2>
              <form onSubmit={handleSubmit} id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <input
                      className="contactus"
                      placeholder="Name"
                      type="text"
                      name="name"
                      autoComplete="off"
                      value={userContact.name}
                      onChange={handleInput}
                    />
                    <span className="text-danger">{formError.name}</span>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="email"
                      name="email"
                      autoComplete="off"
                      value={userContact.email}
                      onChange={handleInput}
                    />
                    <span className="text-danger">{formError.email}</span>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="type"
                      name="phone_number"
                      autoComplete="off"
                      value={userContact.phone_number}
                      onChange={handleInput}
                    />
                    <span className="text-danger">
                      {formError.phone_number}
                    </span>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="text"
                      name="message"
                      autoComplete="off"
                      value={userContact.message}
                      onChange={handleInput}
                    />
                    <span className="text-danger">{formError.message}</span>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="send_btn">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
