import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/contacts";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/projects";
import Footer from "./components/footer";
import moezBinz from "./components/images/moezBinz.png";
import moezBinzAbout from "./components/images/moezBinzAbout.png";
import moezBinzHow from "./components/images/moezBinzHow.png";
import moezBinzNews from "./components/images/moezBinzNews.png";
import moezBinzProducts from "./components/images/moezBinzProducts.png";
import amiDos from "./components/images/amiDos.png";
import amiDosService from "./components/images/amiDosService.png";
import amiDosFooter from "./components/images/amiDosFooter.png";
import amiDosAbout from "./components/images/amiDosAbout.png";
import amiDosProject from "./components/images/amiDosProject.png";
import alqalam from "./components/images/alqalam.png";
import alqalamAbout from "./components/images/alqalamAbout.png";
import alqalamContact from "./components/images/alqalamContact.png";
import alqalamEcomm from "./components/images/alqalamEcomm.png";
import stock from "./components/images/stock.png";
import stockBankInfo from "./components/images/stockBankInfo.png";
import stockCredits from "./components/images/stockCredits.png";
import stockPurchases from "./components/images/stockPurchases.png";
import stockSales from "./components/images/stockSales.png";
import stockShop from "./components/images/stockShop.png";
import EachWork from "./components/eachWork";

function App() {
  const projects = [
    {
      id: 1,
      title: "Moez Binz Website",
      image: moezBinz,
      images: [
        { img: moezBinzAbout, desc: "About page" },
        { img: moezBinzHow, desc: "How it Works page" },
        { img: moezBinzNews, desc: "What's New page" },
        { img: moezBinzProducts, desc: "Products page" },
      ],
      role: "FULL-STACK DEVELOPER",
      description:
        "In this project the client wanted a full-stack developer for show casing the company profile and for allowing users to bid on their products. The project need to be fully responsive with a clear and neat code",
      link: "www.thebinzstore.com",
      // youtubeURL: "https://www.youtube.com/embed/UTmuxNeULZQ",
    },
    {
      id: 2,
      title: "Amidos integrated technologies and security sloutions Website",
      image: amiDos,
      images: [
        { img: amiDosFooter, desc: "Footer of Amidos website" },
        { img: amiDosAbout, desc: "About us page" },
        { img: amiDosService, desc: "Services page" },
        { img: amiDosProject, desc: "Projects page" },
      ],
      role: "FRONT-END DEVELOPER",
      description:
        "For this website, the client reached me beacuse they wanted a website that show cases the company's profile by exploring their service, projects done and packages. The website needs to have an outstanding UI. ",
      // youtubeURL: "https://www.youtube.com/embed/a1x8aTRSwS0",
      link: "https://amidos-nine.vercel.app/",
    },
    {
      id: 3,
      title:
        "Al-Qalam Pre-Primary,Primary and Middle Level School P.L.C. Website",
      image: alqalam,
      images: [
        { img: alqalamAbout, desc: "About us page" },
        { img: alqalamContact, desc: "Contact us page" },
        { img: alqalamEcomm, desc: "E-communication page" },
      ],
      role: "FULL-STACK DEVELOPER",
      description:
        "In this project the client wanted a website that show cases the company prfile including an e-communication between the teacher and the parent. The project need to be fully responsive with clear and neat code.",
      // youtubeURL: "https://www.youtube.com/embed/rKk7fdF1E1w",
      link: "https://alqalam-production.up.railway.app/",
    },
    {
      id: 4,
      title: "Stock Management System",
      image: stock,
      images: [
        { img: stockSales, desc: "Sales page" },
        { img: stockShop, desc: "Shop page" },
        { img: stockPurchases, desc: "Purchased Products page" },
        { img: stockCredits, desc: "Credits taken or given page" },
        {
          img: stockBankInfo,
          desc: "Bank transactions and bank informations page",
        },
      ],
      role: "FULL-STACK DEVELOPER",
      description:
        "In this project the client needed a system for managing stock, sales, purchases and expenses. The project need to be a cleanand fully responsive UI.",
      link: "https://stock-managment-cash-book-production.up.railway.app/",
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
