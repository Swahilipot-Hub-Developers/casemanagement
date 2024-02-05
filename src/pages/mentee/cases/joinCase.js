import Mentee from "@/layout/mentee/Mentee";

const JoinCase = () => {
  return (
    <>
      <header className="navbar-light navbar-sticky">
        <nav className="navbar navbar-expand-xl">
          <div className="container">
        

           

            <div className="dropdown ms-1 ms-lg-0">
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
               
              </a>
              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                aria-labelledby="profileDropdown"
              >
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <img
                        className="avatar-img rounded-circle shadow"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <a className="h6" href="#">
                        Lori Ferguson
                      </a>
                      <p className="small m-0">example@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
               
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
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="pt-0">
          <div className="container-fluid px-0">
            <div
              className="card bg-blue h-100px h-md-200px rounded-0"
              style={{
                background:
                  "url(assets/images/pattern/04.png) no-repeat center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="container mt-n4">
            <div className="row">
              <div className="col-12">
                <div className="card bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0">
                  <div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
                    <div className="col-auto">
                      <div className="avatar avatar-xxl position-relative mt-n3">
                        <img
                          className="avatar-img rounded-circle border border-white border-3 shadow"
                          src="assets/images/avatar/09.jpg"
                          alt=""
                        />
                        <span className="badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">
                          Pro
                        </span>
                      </div>
                    </div>

                    <div className="col d-sm-flex justify-content-between align-items-center">
                      <div>
                        <h1 className="my-1 fs-4">Lori Stevens</h1>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-3 mb-1 mb-sm-0">
                            <span className="h6">255</span>
                            <span className="text-body fw-light">points</span>
                          </li>
                          <li className="list-inline-item me-3 mb-1 mb-sm-0">
                            <span className="h6">7</span>
                            <span className="text-body fw-light">
                              Completed courses
                            </span>
                          </li>
                          <li className="list-inline-item me-3 mb-1 mb-sm-0">
                            <span className="h6">52</span>
                            <span className="text-body fw-light">
                              Completed lessons
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-2 mt-sm-0">
                        <a
                          href="student-course-list.html"
                          className="btn btn-outline-primary mb-0"
                        >
                          View my courses
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="d-xl-none" />
                <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
                  <a className="h6 mb-0 fw-bold d-xl-none" href="#">
                    Menu
                  </a>
                  <button
                    className="btn btn-primary d-xl-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                  >
                    <i className="fas fa-sliders-h" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                <div
                  className="offcanvas-xl offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasSidebar"
                >
                  <div className="offcanvas-header bg-light">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      My profile
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasSidebar"
                      aria-label="Close"
                    />
                  </div>

                  <div className="offcanvas-body p-3 p-xl-0">
                    <div className="bg-dark border rounded-3 p-3 w-100">
                      <div className="list-group list-group-dark list-group-borderless collapse-list">
                        <a
                          className="list-group-item"
                          href="student-dashboard.html"
                        >
                          <i className="bi bi-ui-checks-grid fa-fw me-2" />
                          Dashboard
                        </a>
                        
                        <a
                          className="list-group-item"
                          href="./sessions"
                        >
                          <i className="bi bi-basket fa-fw me-2" />
                          My Session
                        </a>
                        <a
                          className="list-group-item"
                          href="./viewMentors"
                        >
                          <i className="far fa-fw fa-file-alt me-2" />
                          Mentors
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-setting.html"
                        >
                          <i className="bi bi-gear fa-fw me-2" />
                          Settings
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-delete-account.html"
                        >
                          <i className="bi bi-trash fa-fw me-2" />
                          Delete Profile
                        </a>
                        <a
                          className="list-group-item text-danger bg-danger-soft-hover"
                          href="#"
                        >
                          <i className="fas fa-sign-out-alt fa-fw me-2" />
                          Sign Out
                        </a>
                        <ul
                          className="nav collapse flex-column"
                          id="collapseauthentication"
                          data-bs-parent="#navbar-sidebar"
                        >
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-9">
                <div className="card bg-transparent border rounded-3">
                  <div className="card-header bg-transparent border-bottom">
                    <h3 className="mb-0">CASES</h3>
                  </div>

                  <div className="card-body p-3 p-md-4">
                    <div className="row g-4">
                      <div className="col-sm-6 col-lg-4">
                        <div className="card shadow h-100">
                          <div className="card-body pb-0">
                            <div className="d-flex justify-content-between mb-2">
                              <a
                                href="#"
                                className="badge bg-success bg-opacity-10 text-success"
                              >
                                Beginner
                              </a>
                            </div>

                            <h5 className="card-title fw-normal">
                              <a href="#">Graphic Design Masterclass</a>
                            </h5>
                            <p className="mb-2 text-truncate-2">
                              Rooms oh fully taken by worse do Points afraid but
                              may end Rooms Points afraid but may end Rooms
                            </p>

                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star-half-alt text-warning" />
                              </li>
                              <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                4.5/5.0
                              </li>
                            </ul>
                          </div>

                          <div className="card-footer pt-0 pb-3">
                            <hr />
                            <div className="d-flex justify-content-between">
                              <span className="h6 fw-light mb-0">
                                <i className="far fa-clock text-danger me-2" />
                                9h 56m
                              </span>
                              <span className="h6 fw-light mb-0">
                                <i className="fas fa-table text-orange me-2" />
                                65 lectures
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-lg-4">
                        <div className="card shadow h-100">
                          <div className="card-body pb-0">
                            <div className="d-flex justify-content-between mb-2">
                              <a
                                href="#"
                                className="badge bg-success bg-opacity-10 text-success"
                              >
                                Beginner
                              </a>
                            </div>

                            <h5 className="card-title fw-normal">
                              <a href="#">Graphic Design Masterclass</a>
                            </h5>
                            <p className="mb-2 text-truncate-2">
                              Rooms oh fully taken by worse do Points afraid but
                              may end Rooms Points afraid but may end Rooms
                            </p>

                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star-half-alt text-warning" />
                              </li>
                              <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                4.5/5.0
                              </li>
                            </ul>
                          </div>

                          <div className="card-footer pt-0 pb-3">
                            <hr />
                            <div className="d-flex justify-content-between">
                              <span className="h6 fw-light mb-0">
                                <i className="far fa-clock text-danger me-2" />
                                9h 56m
                              </span>
                              <span className="h6 fw-light mb-0">
                                <i className="fas fa-table text-orange me-2" />
                                65 lectures
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-lg-4">
                        <div className="card shadow h-100">
                          <div className="card-body pb-0">
                            <div className="d-flex justify-content-between mb-2">
                              <a
                                href="#"
                                className="badge bg-success bg-opacity-10 text-success"
                              >
                                Beginner
                              </a>
                            </div>

                            <h5 className="card-title fw-normal">
                              <a href="#">Graphic Design Masterclass</a>
                            </h5>
                            <p className="mb-2 text-truncate-2">
                              Rooms oh fully taken by worse do Points afraid but
                              may end Rooms Points afraid but may end Rooms
                            </p>

                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star-half-alt text-warning" />
                              </li>
                              <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                4.5/5.0
                              </li>
                            </ul>
                          </div>

                          <div className="card-footer pt-0 pb-3">
                            <hr />
                            <div className="d-flex justify-content-between">
                              <span className="h6 fw-light mb-0">
                                <i className="far fa-clock text-danger me-2" />
                                9h 56m
                              </span>
                              <span className="h6 fw-light mb-0">
                                <i className="fas fa-table text-orange me-2" />
                                65 lectures
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-lg-4">
                        <div className="card shadow h-100">
                          <div className="card-body pb-0">
                            <div className="d-flex justify-content-between mb-2">
                              <a
                                href="#"
                                className="badge bg-success bg-opacity-10 text-success"
                              >
                                Beginner
                              </a>
                            </div>

                            <h5 className="card-title fw-normal">
                              <a href="#">Graphic Design Masterclass</a>
                            </h5>
                            <p className="mb-2 text-truncate-2">
                              Rooms oh fully taken by worse do Points afraid but
                              may end Rooms Points afraid but may end Rooms
                            </p>

                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star-half-alt text-warning" />
                              </li>
                              <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                4.5/5.0
                              </li>
                            </ul>
                          </div>

                          <div className="card-footer pt-0 pb-3">
                            <hr />
                            <div className="d-flex justify-content-between">
                              <span className="h6 fw-light mb-0">
                                <i className="far fa-clock text-danger me-2" />
                                9h 56m
                              </span>
                              <span className="h6 fw-light mb-0">
                                <i className="fas fa-table text-orange me-2" />
                                65 lectures
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-lg-4">
                        <div className="card shadow h-100">
                          <div className="card-body pb-0">
                            <div className="d-flex justify-content-between mb-2">
                              <a
                                href="#"
                                className="badge bg-success bg-opacity-10 text-success"
                              >
                                Beginner
                              </a>
                            </div>

                            <h5 className="card-title fw-normal">
                              <a href="#">Graphic Design Masterclass</a>
                            </h5>
                            <p className="mb-2 text-truncate-2">
                              Rooms oh fully taken by worse do Points afraid but
                              may end Rooms Points afraid but may end Rooms
                            </p>

                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star-half-alt text-warning" />
                              </li>
                              <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                4.5/5.0
                              </li>
                            </ul>
                          </div>

                          <div className="card-footer pt-0 pb-3">
                            <hr />
                            <div className="d-flex justify-content-between">
                              <span className="h6 fw-light mb-0">
                                <i className="far fa-clock text-danger me-2" />
                                9h 56m
                              </span>
                              <span className="h6 fw-light mb-0">
                                <i className="fas fa-table text-orange me-2" />
                                65 lectures
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-lg-4">
                        <div className="card shadow h-100">
                          <div className="card-body pb-0">
                            <div className="d-flex justify-content-between mb-2">
                              <a
                                href="#"
                                className="badge bg-success bg-opacity-10 text-success"
                              >
                                Beginner
                              </a>
                            </div>

                            <h5 className="card-title fw-normal">
                              <a href="#">Graphic Design Masterclass</a>
                            </h5>
                            <p className="mb-2 text-truncate-2">
                              Rooms oh fully taken by worse do Points afraid but
                              may end Rooms Points afraid but may end Rooms
                            </p>

                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star text-warning" />
                              </li>
                              <li className="list-inline-item me-0 small">
                                <i className="fas fa-star-half-alt text-warning" />
                              </li>
                              <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                4.5/5.0
                              </li>
                            </ul>
                          </div>

                          <div className="card-footer pt-0 pb-3">
                            <hr />
                            <div className="d-flex justify-content-between">
                              <span className="h6 fw-light mb-0">
                                <i className="far fa-clock text-danger me-2" />
                                9h 56m
                              </span>
                              <span className="h6 fw-light mb-0">
                                <i className="fas fa-table text-orange me-2" />
                                65 lectures
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default JoinCase;
