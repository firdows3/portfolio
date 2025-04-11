import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/header.css";
import { FaBars } from "react-icons/fa";
export default function Header() {
  const [visibleHEader, setVisisbleHeader] = useState(false);
  const headerElements = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "about",
      name: "About Me",
    },
    {
      path: "works",
      name: "My Works",
    },
    {
      path: "contacts",
      name: "My Contact",
    },
  ];

  const location = useLocation();
  const [route, setRoute] = useState(location.pathname);
  useEffect(() => {
    if (location.pathname.split("/")[1] === "") {
      setRoute("/");
    } else {
      setRoute(location.pathname.split("/")[1]);
    }
  }, [location.pathname]);

  return (
    <div className="header-component">
      <div className="header">
        <div>My Portfolio</div>
        <div
          className={
            visibleHEader ? "header-right visible-header" : "header-right"
          }
        >
          {headerElements.map((item, index) => (
            <div key={index}>
              <Link
                className={
                  item.path === route || item.path.includes(route)
                    ? "each-header-link active"
                    : "each-header-link"
                }
                to={`${item.path}`}
                onClick={() => setVisisbleHeader(false)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div
          className="header-menu-icon"
          onClick={() => setVisisbleHeader(!visibleHEader)}
        >
          <FaBars />
        </div>
      </div>
    </div>
  );
}
