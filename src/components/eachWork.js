import { useParams } from "react-router-dom";
import "./styles/eachWork.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EachWork({ projects }) {
  const { id } = useParams();
  const currentProject = projects.filter(
    (project) => id === project.id.toString()
  );

  return (
    <div className="main-content">
      <motion.div
        className="each-work-component"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="each-work-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={currentProject[0].image} alt={currentProject[0].title} />
        </motion.div>
        <motion.div
          className="each-work-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {currentProject[0]?.images?.map((image, index) => (
            <div key={index}>
              <div>{image.desc}</div>
              <img src={image.img} alt={image.desc} />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="each-work-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            style={{
              fontSize: "25px",
              margin: "10px 0px",
              fontFamily: '"Marcellus", serif',
            }}
          >
            {currentProject[0]?.title}
          </div>
          <div>{currentProject[0]?.description}</div>
          <div>
            <Link
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "flex-end",
                marginTop: "10px",
              }}
              to={`${currentProject[0].link}`}
              target="_blank"
            >
              Look at the website <FaArrowRight />{" "}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
