import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="logo1" src="images/logo1.png" alt="#" />
                <ul className="social_icon">
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h3>About Us</h3>
                <ul className="about_us">
                  <li>
                    We at Prime Computer And Laptop Accessories take pride in
                    completing 12 years of our existence. Known in the IT market
                    as a innovator of technology, Our Journey has truly been
                    justified to our name. Always Believe in Getting Better.
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h3>Our Service</h3>
                <ul className="conta">
                  <li>
                    Some specifically seek out products by brand, while others
                    shop by category. Their navigation bar reflects this
                    organization, along with quick links to inexpensive and sale
                    products.
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h3>Contact Us</h3>
                <ul className="conta">
                  <li>
                    Computer And Laptop Accessories helps you create a powerful
                    and scalable catalog of products online through our
                    e-commerce content solutions. Our team of experienced
                    writers can enrich your product descriptions with complete
                    and accurate information using relevant keywords so that you
                    get found by potential customers.
                  </li>
                </ul>
              </div>
              {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <form className="bottom_form">
                  <h3>Newsletter</h3>
                  <input
                    className="enter"
                    placeholder="Enter your email"
                    type="text"
                    name="Enter your email"
                  />
                  <button className="sub_btn">subscribe</button>
                </form>
              </div> */}
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    © 2022 All Rights Reserved. Design by
                    <Link to="https://html.design/"> Free Html Templates</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
