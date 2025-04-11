import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/contacts";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/projects";
import Footer from "./components/footer";
import photoGallery from "./components/images/photoGallery.png";
import carWash from "./components/images/carWash.png";
import wahdatalUmmah from "./components/images/WahdatalUmmahWebsite.png";
import chatApp from "./components/images/chatApp.png";
import EachWork from "./components/eachWork";

function App() {
  const projects = [
    {
      id: 1,
      title: "Photo Gallery",
      image: photoGallery,
      role: "FRONTEND DEVELOPER",
      description:
        "Developed a modern and responsive photo gallery application that allows users to browse, filter, and mark their favorite images. Focused on creating a clean, user-friendly interface with smooth transitions and hover effects. The gallery layout adapts seamlessly to various screen sizes, providing an optimal experience on both mobile and desktop. Emphasized accessibility and performance optimization throughout the development process.",
      youtubeURL: "https://www.youtube.com/embed/UTmuxNeULZQ",
    },
    {
      id: 2,
      title: "Carwash Website",
      image: carWash,
      role: "FULL-STACK DEVELOPER",
      description:
        "Designed and built a fully functional car wash service platform, enabling users to browse available services, make online bookings, and receive instant confirmations. Integrated user authentication and role-based access for customers and admins. The admin dashboard allows for managing bookings, services, and pricing in real time. Employed a mobile-first design approach and ensured secure data handling and smooth navigation across all pages.",
      youtubeURL: "https://www.youtube.com/embed/a1x8aTRSwS0",
    },
    {
      id: 3,
      title: "Wahdatal Ummah Website",
      image: wahdatalUmmah,
      role: "FULL-STACK DEVELOPER",
      description:
        "An ongoin project aims to create a dynamic, multilingual website for the Wahdatal Ummah community to promote religious awareness and activities. Developed a clean, intuitive design tailored for both youth and older users, and implemented a secure content management system for admins to update content easily.",
      youtubeURL: "https://www.youtube.com/embed/rKk7fdF1E1w",
    },
    {
      id: 4,
      title: "Chat App",
      image: chatApp,
      role: "FULL-STACK DEVELOPER",
      description:
        "Built a real-time chat application with a focus on smooth user interaction and performance. Users can sign up, log in, search for contacts, and engage in instant messaging. Implemented features like live typing indicators, responsive chat layouts, and persistent chat history. Prioritized data privacy and built the backend to efficiently manage socket connections and user sessions. The app is fully responsive, ensuring usability across all devices.",
    },
  ];

  return (
    <div className="App" style={{ backgroundColor: "#FFFCF8" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400..900;1,400..900&family=Kumbh+Sans:wght@100..900&family=Marcellus&display=swap"
        rel="stylesheet"
      />
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home projects={projects} />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="works">
          <Route index element={<Projects projects={projects} />} />
          {projects.map((item) => {
            return (
              <Route path=":id" element={<EachWork projects={projects} />} />
            );
          })}
        </Route>
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
