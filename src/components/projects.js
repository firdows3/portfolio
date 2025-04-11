import "./styles/project.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <div className="main-content">
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: "25px",
          margin: "3% 0px 2%",
          textAlign: "center",
          fontFamily: '"Marcellus", serif',
        }}
      >
        MY WORKS <div className="underline" style={{ margin: "3px auto" }} />
      </motion.h2>
      <div>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center" }} // Align the items horizontally
          >
            {/* Image comes from the left */}
            <motion.div
              className="project-image"
              initial={{ opacity: 0, x: "-100%" }} // Image starts from the left off-screen
              animate={{ opacity: 1, x: 0 }} // Image moves to its final position
              transition={{ duration: 0.6 }}
            >
              <img src={project.image} alt={project.title} />
            </motion.div>

            {/* Project info comes from the right */}
            <motion.div
              className="project-info"
              initial={{ opacity: 0, x: "100%" }} // Info starts from the right off-screen
              animate={{ opacity: 1, x: 0 }} // Info moves to its final position
              transition={{ duration: 0.6 }}
            >
              <Link
                to={`${project.id}`}
                style={{
                  color: "#000",
                  textDecoration: "none",
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      margin: "8px 0px",
                      fontFamily: '"Marcellus", serif',
                    }}
                    className="project-title"
                  >
                    {project.title}
                  </div>
                  <p className="project-role">{project.role}</p>
                </div>
                <FaArrowRight style={{ fontSize: "25px" }} />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
