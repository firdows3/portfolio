import meTwo from "./images/me2.jpg";
import "./styles/about.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="main-content">
      {/* About Part One */}
      <motion.div
        className="about-part-one"
        initial={{ opacity: 0, x: -100 }} // Start content from left
        whileInView={{ opacity: 1, x: 0 }} // Bring it to the center
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{ flex: 1 }}>
          <motion.div
            style={{
              fontSize: "25px",
              margin: "8px 0px",
              fontFamily: '"Marcellus", serif',
            }}
            initial={{ opacity: 0, x: -100 }} // Slide in from left
            whileInView={{ opacity: 1, x: 0 }} // Center the content
            transition={{ duration: 0.7 }}
          >
            ABOUT ME
          </motion.div>
          <motion.div
            className="about-part-one-description"
            initial={{ opacity: 0, x: -100 }} // Slide in from left
            whileInView={{ opacity: 1, x: 0 }} // Center the content
            transition={{ duration: 0.8 }}
          >
            Welcome to my corner of the web! I'm Firdows Bedru, a dedicated
            software engineer based in Addis Ababa, Ethiopia. With a keen
            interest in technology from a young age, I've honed my skills in
            front-end development, mastering HTML, CSS, JavaScript, and ReactJS.
            Additionally, my passion for design led me to become proficient in
            UI/UX with tools like Figma. In addition to that I am using NodeJs
            as a backend framework with MongoDB for the database. I'm driven by
            the opportunity to create impactful solutions and thrive in
            collaborative environments. When I'm not coding, you can find me
            exploring new technologies, advocating for diversity in tech, or
            mentoring aspiring developers. Let's connect and build something
            amazing together!
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Slide in from right (image)
          whileInView={{ opacity: 1, x: 0 }} // Center the image
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <img src={meTwo} className="about-image" alt="my second" />
        </motion.div>
      </motion.div>

      {/* About Description (All Left Animated Content) */}
      <motion.div
        className="about-description"
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        whileInView={{ opacity: 1, x: 0 }} // Center the content
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: "25px",
            margin: "8px 0px",
            fontFamily: '"Marcellus", serif',
          }}
        >
          How I Learned
        </div>
        <div>
          I was born in 1995 EC at Awolia Hospital in Addis Ababa. At the age of
          3, I began my education journey at Alqalam School, completing my
          elementary education there. I continued to Alafia School for grades 9
          and 10, and then completed my preparatory studies at Sumeya School. In
          2013, I enrolled at Jimma University with the initial intention of
          pursuing a health-related field. However, I later shifted my focus to
          software engineering. Upon joining the software engineering
          department, I embarked on a journey of self-teaching web development.
          After mastering front-end development, I delved into UI/UX design.
          Subsequently, I ventured into backend development, discovering my
          knack for quickly adapting to various programming languages. And then
          I started mentoring my junior class students how to learn website
          development. Soon, I aspire to become a proficient MERN stack
          developer.
        </div>
      </motion.div>

      <motion.div
        className="about-description"
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        whileInView={{ opacity: 1, x: 0 }} // Center the content
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: "25px",
            margin: "8px 0px",
            fontFamily: '"Marcellus", serif',
          }}
        >
          Values and Beliefs
        </div>
        <div>
          I hold disciplined and consistent learning in web development as a
          core value. This commitment reflects my dedication to personal and
          professional growth, alongside my ongoing efforts to cultivate a
          growth mindset. Additionally, I believe that when I reach my peak
          potential, I'll have the opportunity to positively influence many
          individuals in Ethiopia and around the world. I trust in Allah to
          guide me in fulfilling my mission on this earth, Inshaallah.
        </div>
      </motion.div>

      <motion.div
        className="about-description"
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        whileInView={{ opacity: 1, x: 0 }} // Center the content
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: "25px",
            margin: "8px 0px",
            fontFamily: '"Marcellus", serif',
          }}
        >
          Interests and Hobbies
        </div>
        <ul>
          <li>
            Reading: it is one of the most hobbies I like, because I can gather
            different knowledge through reading. The type of books I like to
            read is like, religious, mindset, business soon.
          </li>
          <li>
            Coding: after I started learning how to code it became one of my
            hobbies. So I enjoyed coding.
          </li>
          <li>
            Listening to Podcast: I enjoyed this hobby because I can take the
            experience I wanted from matured people and people who have the
            qualities I wanted in my carrier. Specially tech podcasts helps me
            in increasing my experience.
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="about-description"
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        whileInView={{ opacity: 1, x: 0 }} // Center the content
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: "25px",
            margin: "8px 0px",
            fontFamily: '"Marcellus", serif',
          }}
        >
          Extracurricular Activities
        </div>
        <ul>
          <li>
            Muslim Students in Jimma University: I have worked here voluntarily
            for Muslim students in Jimma University.
          </li>
          <li>
            Alif Developers: this group was established for mentoring students
            throughout web development, and I was one of the mentors in this
            group.
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="about-description"
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        whileInView={{ opacity: 1, x: 0 }} // Center the content
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: "25px",
            margin: "8px 0px",
            fontFamily: '"Marcellus", serif',
          }}
        >
          Aspirations and Goals
        </div>
        <div>
          In the coming years, I see myself as a beacon of positive change,
          spearheading my own tech company known as AmiDos while immersing
          myself in philanthropic ventures. My heart's desire is to uplift and
          empower young girls, offering unwavering support in mind, body, and
          spirit. Through coaching and mentorship, I aim to ignite a fire within
          individuals, empowering them to unlock their fullest potential.
          Ultimately, my fervent dream is to stand as one of the world's most
          impactful and benevolent female leaders. Moreover, I aspire for my
          name, 'Firdows Bedru', to echo through generations, leaving a lasting
          legacy of inspiration and empowerment long after my time on this
          earth.
        </div>
      </motion.div>

      <motion.div
        className="about-description"
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        whileInView={{ opacity: 1, x: 0 }} // Center the content
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: "25px",
            margin: "8px 0px",
            fontFamily: '"Marcellus", serif',
          }}
        >
          Personal Achievements
        </div>
        <ul>
          <li>
            Self-Learned Frontend and Backend Technologies like JS, ReactJS,
            NextJS, NodeJS, MongoDB, ExpressJS, PostgreSQL, Typescript,
            TailwindCSS, and soon.
          </li>
          <li>
            Designed intuitive and user-friendly interfaces that improved
            usability and increased user engagement.
          </li>
          <li>
            Gained hands-on experience as a Full-stack Developer intern,
            contributing to real-world projects and collaborating with
            cross-functional teams.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
