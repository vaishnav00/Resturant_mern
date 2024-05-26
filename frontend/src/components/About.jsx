import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>We take food seriously – seriously delicious, that is.</p>
            </div>
            <p className="mid">
            With a dedication to quality and flavor, we craft culinary experiences that delight the senses and leave a lasting impression. Join us on a journey where every bite tells a story, and every meal is an adventure.
Indulge in the magic of food with us. Because when it comes to great taste, we're serious about making it unforgettable.
            </p>
            {/* Replace Link with NavLink */}
            <NavLink to="/menu" className="explore-menu-link">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </NavLink>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
