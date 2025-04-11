import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./styles/footer.css";
import meOne from "./images/me1.jpg";
export default function Footer() {
  return (
    <div className="footer-component">
      <div className="footer-top">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <img src={meOne} alt="my first" />
          <div style={{ color: "rgba(100, 100, 100, .4)", width: 270 }}>
            <div style={{ paddingBottom: "5px" }}>Firdows Bedru</div>
            <div style={{ fontSize: "12px" }}>
              A passionate and top rated full stack web developer.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div>Contact Me</div>
          <div style={{ color: "rgba(100, 100, 100, .4)", fontSize: "12px" }}>
            <FaMailBulk /> bedrufirdows61@gmail.com
          </div>
          <div style={{ color: "rgba(100, 100, 100, .4)", fontSize: "12px" }}>
            <FaPhone /> +251-910-18-3696
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div style={{ color: "rgba(80, 80, 80, .4)", fontSize: "12px" }}>
          &copy;copyright reserved @2025
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaInstagram
            style={{ color: "rgba(80, 80, 80, .4)", fontSize: "20px" }}
          />
          <FaLinkedin
            style={{ color: "rgba(80, 80, 80, .4)", fontSize: "20px" }}
          />
          <FaGithub
            style={{ color: "rgba(80, 80, 80, .4)", fontSize: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}
