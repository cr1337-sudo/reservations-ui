import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <a href="#" class="nav-link">
            <span class="link-text logo-text">RESERVAS</span>

            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>

        <li class="nav-item">
          <Link to="/" className="nav-link">
            <i class="fas fa-user nav-i"></i>
            <span class="link-text">Profile</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link to="/reservations" className="nav-link">
            <i class="fas fa-clock nav-i"></i>
            <span class="link-text">Reservations</span>
          </Link>
        </li>

        <li class="nav-item" id="themeButton">
          <a href="#" class="nav-link">
            <svg
              class="theme-icon"
              id="lightIcon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="moon-stars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
