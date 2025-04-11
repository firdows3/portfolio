import "./styles/home.css";
import meOne from "./images/me1.jpg";
import meTwo from "./images/me2.jpg";
import htmlIcon from "./images/html.webp";
import cssIcon from "./images/css.webp";
import jsIcon from "./images/javascript.webp";
import reactIcon from "./images/React.webp";
import nodeIcon from "./images/node-js.png";
import mongodbIcon from "./images/mongodb.png";
import postgresIcon from "./images/postgresql.png";
import tsIcon from "./images/ts.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home({ projects }) {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollLeft -= 300;
    } else {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="main-content">
      <motion.div
        className="home-part-one"
        initial={{ opacity: 0 }} // Start with no opacity
        animate={{ opacity: 1 }} // Fade in as it comes into place
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={meOne}
          className="my-first-image"
          initial={{ opacity: 0, x: "-100%" }} // Image starts from the left off-screen
          animate={{ opacity: 1, x: 0 }} // Image moves into its final position
          transition={{ duration: 0.8 }}
          alt="my first"
        />

        <motion.div
          className="home-part-one-right"
          initial={{ opacity: 0, x: "100%" }} // Content starts from the right off-screen
          animate={{ opacity: 1, x: 0 }} // Content moves into its final position
          transition={{ duration: 0.8 }}
        >
          <div style={{ fontSize: "10px" }}>Firdows Bedru</div>
          <div
            style={{
              fontSize: "25px",
              margin: "8px 0px",
              fontFamily: '"Marcellus", serif',
            }}
          >
            FULL STACK WEB DEVELOPER & UI/UX DESIGNER
          </div>
          <div style={{ fontSize: "12px", marginBottom: "3%" }}>
            I'm Firdows Bedru, a full stack developer skilled in HTML, CSS, JS,
            ReactJS, and Node JS. I'm also proficient in UI/UX design using
            Figma.
          </div>
          <Link to="/about" className="home-button">
            About Me
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="home-part-two"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="home-icon">
          <img src={htmlIcon} alt="html icon" />
        </div>
        <div className="home-icon">
          <img src={cssIcon} alt="css icon" />
        </div>
        <div className="home-icon">
          <img src={jsIcon} alt="js icon" />
        </div>
        <div className="home-icon">
          <img src={reactIcon} alt="react icon" />
        </div>
        <div className="home-icon">
          <img src={nodeIcon} alt="node icon" />
        </div>
        <div className="home-icon">
          <img src={mongodbIcon} alt="mongodb icon" />
        </div>
        <div className="home-icon">
          <img src={postgresIcon} alt="postgres icon" />
        </div>
        <div className="home-icon">
          <img src={tsIcon} alt="ts icon" />
        </div>
      </motion.div>
      <motion.div
        className="home-part-three"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="home-about-section">
          <img src={meTwo} alt="my second" />
          <div className="home-about-section-overlay">
            <div
              style={{
                fontSize: "25px",
                margin: "8px 0px",
                fontFamily: '"Marcellus", serif',
              }}
            >
              ABOUT ME
            </div>
            <div
              style={{
                fontSize: "13px",
                marginRight: "10px",
                lineHeight: "20px",
              }}
            >
              I'm Firdows Bedru, a 21-year-old software engineer residing in
              Addis Ababa, Ethiopia. Passionate about technology, I specialize
              in software development, striving to make meaningful contributions
              to the field.
            </div>
          </div>
        </div>
        <div className="home-part-three-right">
          <div className="home-part-three-box">
            10+ <br />
            <span style={{ fontSize: "12px" }}>PROJECTS</span>
          </div>
          <div className="home-part-three-box">
            5+ <br />
            <span style={{ fontSize: "12px" }}>CLIENTS</span>
          </div>
          <div className="home-part-three-box">
            1+ <br />
            <span style={{ fontSize: "12px" }}>YEARS</span>
          </div>
          <div className="home-part-three-box">
            10+ <br />
            <span style={{ fontSize: "12px" }}>PROJECTS</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="home-part-four"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          style={{
            fontSize: "25px",
            margin: "8px 2.5% 2%",
            fontFamily: '"Marcellus", serif',
          }}
        >
          MY WORKS <div className="underline" />
        </h2>

        <div className="slider-wrapper">
          <div className="works-slider" ref={sliderRef}>
            {projects.map((project, index) => (
              <div className="slide" key={index}>
                <img src={project.image} alt={project.title} />
                <p>{project.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ float: "right", margin: "3px 10px" }}>
          <button className="arrow left" onClick={() => scroll("left")}>
            <FaArrowLeft />
          </button>
          <button className="arrow right" onClick={() => scroll("right")}>
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
      <motion.div
        className="home-part-five"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div style={{ fontSize: "25px" }}>Want to connect?</div>
        <button className="home-button" style={{ fontSize: "13px" }}>
          Contact Me
        </button>
      </motion.div>
      <div style={{ paddingBottom: "3%" }}></div>
    </div>
  );
}
