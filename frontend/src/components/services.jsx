import React from "react";
import Navbar from "./navbar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Sprout, Cctv, HouseWifi, LaptopMinimalCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

export const Services = () => {
  return (
    <div id="services">
      <p className="title">Our Services</p>
      <p className="subtitle">
        Explore our innovative tech solutions designed to make life smarter,
        easier, and more efficient.
      </p>
      <motion.main
        className="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid-container">
          <div className="card card1">
            <div class="image">
              <Sprout className="card-icon" />
            </div>
            <div class="card-info">
              <span>Smart Garden Automation</span>
              <p>
                Monitor and water your garden automatically with intelligent,
                eco-friendly systems.
              </p>
            </div>
            <button
              className="book-now"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Now{" "}
              <FontAwesomeIcon
                className="icon"
                icon={faArrowRight}
                style={{ color: "#000000" }}
              />
            </button>
          </div>
          <div className="card card2">
            <div className="image">
              <Cctv className="card-icon" />
            </div>
            <div className="card-info">
              <span>Smart Attendance System</span>
              <p>
                Track attendance seamlessly using facial recognition and
                real-time data logging.
              </p>
            </div>
            <button className="book-now" onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Book Now{" "}
              <FontAwesomeIcon
                className="icon"
                icon={faArrowRight}
                style={{ color: "#000000" }}
              />
            </button>
          </div>
          <div className="card card3">
            <div className="image">
              <HouseWifi className="card-icon" />
            </div>
            <div className="card-info">
              <span>Smart Home Automation</span>
              <p>
                Control your lights, appliances, and security with a single
                smart interface.
              </p>
            </div>
            <button className="book-now" onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Book Now{" "}
              <FontAwesomeIcon
                className="icon"
                icon={faArrowRight}
                style={{ color: "#000000" }}
              />
            </button>
          </div>
          <div className="card card4">
            <div className="image">
              <LaptopMinimalCheck className="card-icon" />
            </div>
            <div className="card-info">
              <span>Technical Support</span>
              <p>
                Get prompt, reliable tech assistance to keep your smart systems
                running smoothly.
              </p>
            </div>
            <button className="book-now" onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Book Now{" "}
              <FontAwesomeIcon
                className="icon"
                icon={faArrowRight}
                style={{ color: "#000000" }}
              />
            </button>
          </div>
        </div>
      </motion.main>
    </div>
  );
};
