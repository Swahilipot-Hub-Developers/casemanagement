/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Header = () => {
  return (
    <header className="navbar-light navbar-sticky">
      {/* Logo Nav START */}
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          {/* Logo START */}
          <Link className="navbar-brand" href="/">
            <img
              className="light-mode-item navbar-brand-item"
              src="/logo.png"
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item"
              src="/logo.png"
              alt="logo"
            />
          </Link>
          {/* Logo END */}
          {/* Responsive navbar toggler */}
          <button
            className="navbar-toggler ms-sm-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>
          {/* Main navbar START */}
          <div className="navbar-collapse collapse" id="navbarCollapse">
            {/* Nav Main menu START */}
            <ul className="navbar-nav navbar-nav-scroll ms-auto">
              {/* Nav item 2 Course */}
              <li className="nav-item dropdown">
                <a className="nav-link" href="course-grid.html">
                  Our Mentors
                </a>
              </li>
            </ul>
            {/* Nav Main menu END */}
          </div>
          {/* Main navbar END */}
          {/* Profile and notification START */}
          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
           
            {/* Profile dropdown START */}
            <li className="nav-item ms-3 dropdown">
              {/* Avatar */}
              <a
                className="avatar avatar-sm p-0"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-auto-close="outside"
                data-bs-display="static"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="avatar-img rounded-circle"
                  src="/assets/images/avatar/01.jpg"
                  alt="avatar"
                />
              </a>
              {/* Profile dropdown START */}
              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                aria-labelledby="profileDropdown"
              >
                {/* Profile info */}
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    {/* Avatar */}
                    <div className="avatar me-3">
                      <img
                        className="avatar-img rounded-circle shadow"
                        src="/assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <a className="h6" href="#">
                        User Name
                      </a>
                      <p className="small m-0">example@gmail.com</p>
                    </div>
                  </div>
                </li>
                {/* Links */}
                <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-person fa-fw me-2" />
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-gear fa-fw me-2" />
                    Account Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-info-circle fa-fw me-2" />
                    Help
                  </a>
                </li>
                <li>
                  <a className="dropdown-item bg-danger-soft-hover" href="#">
                    <i className="bi bi-power fa-fw me-2" />
                    Sign Out
                  </a>
                </li>
                <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>
                {/* Dark mode options START */}
                <li>
                  <div className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                    <button
                      type="button"
                      className="btn btn-sm mb-0"
                      data-bs-theme-value="light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-sun fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        <use href="#" />
                      </svg>{" "}
                      Light
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm mb-0"
                      data-bs-theme-value="dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-moon-stars fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        <use href="#" />
                      </svg>{" "}
                      Dark
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm mb-0 active"
                      data-bs-theme-value="auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-circle-half fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                        <use href="#" />
                      </svg>{" "}
                      Auto
                    </button>
                  </div>
                </li>
                {/* Dark mode options END*/}
              </ul>
              {/* Profile dropdown END */}
            </li>
            {/* Profile dropdown END */}
          </ul>
          {/* Profile and notification END */}
        </div>
      </nav>
      {/* Logo Nav END */}
    </header>
  );
};

export default Header;
