import React from "react";
// import AboutUs from "../components/AboutUs";

function AboutUsPage() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>About Us</h2>
                <p>
                  We at Prime Computer And Laptop Accessories take pride in
                  completing 12 years of our existence. Known in the IT market
                  as a innovator of technology, Our Journey has truly been
                  justified to our name. Always Believe in Getting Better.
                </p>
                {/* <a className="read_more" href="#">
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img">
                <figure>
                  <img src="images/about.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
