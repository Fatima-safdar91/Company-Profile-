import React, { useEffect } from "react";
import "../NavBar.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  // const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".topnav a");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        // Remove the 'active' class from all links
        links.forEach(function (otherLink) {
          otherLink.classList.remove("active");
        });

        // Add the 'active' class to the clicked link
        link.classList.add("active");
      });
    });

    // Clean up event listeners when the component unmounts
    return () => {
      links.forEach(function (link) {
        link.removeEventListener("click", function () {
          // your removal logic if needed
        });
      });
    };
  }, []); // empty dependency array means this effect runs once when the component mounts

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolling(window.scrollY > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="topnav">
        <nav className="navbar">
          <h1 className="text">Kudos</h1>
         <div className="titles">
          <ul>
            <li>
              <Link to="/" className="active">
                Portfolio{" "}
              </Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
          </ul>
      </div>
        </nav>
    </div>
  );
};

export default Navigation;
