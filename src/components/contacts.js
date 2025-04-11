import { motion } from "framer-motion";
import "./styles/contacts.css";
import { FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contacts() {
  return (
    <motion.div
      className="contacts-component"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contacts-left">
        <motion.div
          style={{
            fontSize: "25px",
            margin: "8px 0px",
            fontFamily: '"Marcellus", serif',
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          FULL STACK WEB DEVELOPER & UI/UX DESIGNER
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm Firdows Bedru, a front-end developer skilled in HTML, CSS, JS, and
          ReactJS. I'm also proficient in UI/UX design using Figma.
        </motion.div>
      </div>

      <div className="contacts-line"></div>

      <motion.div
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          style={{
            fontSize: "28px",
            margin: "10px 0px",
          }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's work together
        </motion.div>

        {/* Phone contact */}
        <motion.div
          className="each-contact"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaPhone style={{ fontSize: "30px" }} />
          <div>+251-910-18-3696</div>
        </motion.div>

        {/* Instagram contact */}
        <motion.div
          className="each-contact"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaInstagram style={{ fontSize: "30px" }} />
          <a
            target="_blank"
            href="https://www.instagram.com/fird_bedr?igsh=MXZpczNjcjY0ZzFydA=="
          >
            fird_bedr
          </a>
        </motion.div>

        {/* LinkedIn contact */}
        <motion.div
          className="each-contact"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaLinkedin style={{ fontSize: "30px" }} />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/firdows-bedru-252b002a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            Firdows Bedru
          </a>
        </motion.div>

        {/* GitHub contact */}
        <motion.div
          className="each-contact"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaGithub style={{ fontSize: "30px" }} />
          <a target="_blank" href="https://github.com/firdows3">
            firdows3
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
