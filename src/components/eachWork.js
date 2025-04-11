import { useParams } from "react-router-dom";
import "./styles/eachWork.css";
import { motion } from "framer-motion";

export default function EachWork({ projects }) {
  const { id } = useParams();
  const currentProject = projects.filter((project) => id == project.id);

  return (
    <div className="main-content">
      <motion.div
        className="each-work-component"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {currentProject[0].youtubeURL ? (
          <motion.div
            className="each-work-video-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe
              width="100%"
              height="400"
              src={currentProject[0]?.youtubeURL.replace("watch?v=", "embed/")}
              title={currentProject[0]?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        ) : (
          <motion.div
            className="each-work-image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={currentProject[0].image} alt={currentProject[0].title} />
          </motion.div>
        )}
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
        </motion.div>
      </motion.div>
    </div>
  );
}
