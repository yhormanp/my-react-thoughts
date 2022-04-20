import React from "react";
import "./NordstromMain.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function NordstromMain() {
  return (
    <div>
      <section>
        <div>
          <nav className="nav__top-banner nav__top-banner-black">
            <span>Last chance to earn 2x the points on beauty</span>
          </nav>
          <div className="container__wrapper">
          <div className="wrapper__title"></div>
          <div className="wrapper__options">
            <div className="wrapper__search">
              <SearchOutlinedIcon fontSize="large"></SearchOutlinedIcon>
              <span className="container__general-text ">Search</span>
            </div>
            <div className="wrapper__user">
              <span className="container__general-text">User Data</span>
            </div>
          </div>
        </div>
        </div>
        
      </section>
      <main> </main>

      <div className="container">
        
        <div className="container__menu">
          <nav>
            <ul className="container__navigation">
              <li>
                <button>Sale</button>
              </li>
              <li>
                <button>Women</button>
              </li>
              <li>
                <button>Men</button>
              </li>
              <li>
                <button>Kids</button>
              </li>
              <li>
                <button>Young Adult</button>
              </li>
              <li>
                <button>Activewear</button>
              </li>
              <li>
                <button>Home </button>
              </li>
              <li>
                <button>Beauty </button>
              </li>
            </ul>
          </nav>
        </div>

        <section>
          <div>
            <div>
              <h1 className="container__title-text">Something went wrong</h1>
              <p className="container__subtext">
                Wait a moment and refresh the page
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer__group">
          <p className="container__general-text">
            Footer element to show details that must be kept visible at the
            bottom of the page
          </p>
        </div>
      </footer>
    </div>
  );
}

export default NordstromMain;
