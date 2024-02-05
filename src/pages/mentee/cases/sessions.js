const Sessions = () => {
  return (
    <>
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
                            <span className="h6">7</span>
                            <span className="text-body fw-light">
                              Completed Sessions
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
                          href="./view"
                          className="btn btn-outline-primary mb-0"
                        >
                          View my Sessions
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
                          href="./dashboard"
                        >
                          <i className="bi bi-ui-checks-grid fa-fw me-2" />
                          Dashboard
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
                          Delete Session
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

                  <div className="offcanvas-body p-3 p-xl-0">
                   

                    
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="row mb-4">
                  <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                    <div className="d-flex justify-content-center align-items-center p-4 bg-orange bg-opacity-15 rounded-3">
                      <span className="display-6 lh-1 text-orange mb-0">
                        <i className="fas fa-tv fa-fw" />
                      </span>
                      <div className="ms-4">
                        <div className="d-flex">
                          <h5
                            className="purecounter mb-0 fw-bold"
                            data-purecounter-start={0}
                            data-purecounter-end={9}
                            data-purecounter-delay={200}
                          >
                            0
                          </h5>
                        </div>
                        <p className="mb-0 h6 fw-light">Total Sessions</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                    <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-15 rounded-3">
                      <span className="display-6 lh-1 text-purple mb-0">
                        <i className="fas fa-clipboard-check fa-fw" />
                      </span>
                      <div className="ms-4">
                        <div className="d-flex">
                          <h5
                            className="purecounter mb-0 fw-bold"
                            data-purecounter-start={0}
                            data-purecounter-end={52}
                            data-purecounter-delay={200}
                          >
                            0
                          </h5>
                        </div>
                        <p className="mb-0 h6 fw-light">Complete lessons</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                    <div className="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-10 rounded-3">
                      <span className="display-6 lh-1 text-success mb-0">
                        <i className="fas fa-medal fa-fw" />
                      </span>
                      <div className="ms-4">
                        <div className="d-flex">
                          <h5
                            className="purecounter mb-0 fw-bold"
                            data-purecounter-start={0}
                            data-purecounter-end={8}
                            data-purecounter-delay={300}
                          >
                            0
                          </h5>
                        </div>
                        <p className="mb-0 h6 fw-light">
                          Achieved Certificates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-transparent border rounded-3">
                  <div className="card-header bg-transparent border-bottom">
                    <h3 className="mb-0">My Sessions</h3>
                  </div>
                  <div className="card-body">
                    <div className="row g-3 align-items-center justify-content-between mb-4">
                      <div className="col-md-8">
                        <form className="rounded position-relative">
                          <input
                            className="form-control pe-5 bg-transparent"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          <button
                            className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                            type="submit"
                          >
                            <i className="fas fa-search fs-6 " />
                          </button>
                        </form>
                      </div>
                     
                      <div className="col-md-3">
                       
                        <form>
                          <select
                            className="form-select js-choice border-0 z-index-9 bg-transparent"
                            aria-label=".form-select-sm"
                          >
                            <option value="">Sort by</option>
                            <option value="Health">Health</option>
                            <option value="TVET Courses">TVET Courses</option>
                            <option value="Currently Employed">
                              Currently employed{" "}
                            </option>
                            <option value="Running Business">
                              Running Business
                            </option>
                            <option></option>
                          </select>
                        </form>
                      </div>
                    </div>

                    <div className="table-responsive ">
                      <table className="table table-dark-gray align-middle p-3 mb-0 table-hover ">
                        <thead className="table-reposnsive">
                          <tr className="table">
                            <th scope="col" class="border-0 rounded-start">
                              Course Title
                            </th>
                            <th scope="col" class="border-0">
                              Sessions
                            </th>
                            <th scope="col" class="border-0">
                              Completed
                            </th>
                            <th scope="col" class="border-0 rounded-end">
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="w-100px"></div>
                                <div className="mb-0 ms-2">
                                  <h6>
                                    <a href="#">
                                      Create a Design System in Figma
                                    </a>
                                  </h6>
                                 
                                  <div className="overflow-hidden">
                                    <h6 className="mb-0 text-end">100%</h6>
                                    <div className="progress progress-sm bg-primary bg-opacity-10">
                                      <div
                                        className="progress-bar bg-primary aos"
                                        role="progressbar"
                                        data-aos="slide-right"
                                        data-aos-delay={200}
                                        data-aos-duration={1000}
                                        data-aos-easing="ease-in-out"
                                        style={{ width: "100%" }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                           
                            <td>42</td>
                           
                            <td>42</td>
                          
                            <td>
                              <button className="btn btn-sm btn-success me-1 mb-1 mb-x;-0 disabled">
                                <i className="bi bi-check me-1" />
                                Complete
                              </button>
                              <a href="#" className="btn btn-sm btn-light me-1">
                                <i className="bi bi-arrow-repeat me-1" />
                                Restart
                              </a>
                            </td>
                          </tr>
                      
                          <tr>
                           
                            <td>
                              <div className="d-flex align-items-center">
                               
                                <div className="w-100px">
                                  <img
                                    src="assets/images/courses/4by3/05.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                
                                  <h6>
                                    <a href="#">
                                      The Complete Web Development in python
                                    </a>
                                  </h6>
                                 
                                  <div className="overflow-hidden">
                                    <h6 className="mb-0 text-end">60%</h6>
                                    <div className="progress progress-sm bg-primary bg-opacity-10">
                                      <div
                                        className="progress-bar bg-primary aos"
                                        role="progressbar"
                                        data-aos="slide-right"
                                        data-aos-delay={200}
                                        data-aos-duration={1000}
                                        data-aos-easing="ease-in-out"
                                        style={{ width: "60%" }}
                                        aria-valuenow={60}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          
                            <td>28</td>
                            
                            <td>12</td>
                           
                            <td>
                              <a
                                href="#"
                                className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"
                              >
                                <i className="bi bi-play-circle me-1" />
                                Continue
                              </a>
                            </td>
                          </tr>
                         
                          <tr>
                          
                            <td>
                              <div className="d-flex align-items-center">
                              
                                <div className="w-100px">
                                  <img
                                    src="assets/images/courses/4by3/01.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                              
                                  <h6>
                                    <a href="#">
                                      Digital Marketing Masterclass
                                    </a>
                                  </h6>
                                 
                                  <div className="overflow-hidden">
                                    <h6 className="mb-0 text-end">40%</h6>
                                    <div className="progress progress-sm bg-primary bg-opacity-10">
                                      <div
                                        className="progress-bar bg-primary aos"
                                        role="progressbar"
                                        data-aos="slide-right"
                                        data-aos-delay={200}
                                        data-aos-duration={1000}
                                        data-aos-easing="ease-in-out"
                                        style={{ width: "40%" }}
                                        aria-valuenow={40}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                         
                            <td>32</td>
                         
                            <td>18</td>
                          
                            <td>
                              <a
                                href="#"
                                className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"
                              >
                                <i className="bi bi-play-circle me-1" />
                                Continue
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                
                                <div className="w-100px"></div>
                                <div className="mb-0 ms-2">
                                
                                  <h6>
                                    <a href="#">Graphic Design Masterclass</a>
                                  </h6>

                                  <div className="overflow-hidden">
                                    <h6 className="mb-0 text-end">90%</h6>
                                    <div className="progress progress-sm bg-primary bg-opacity-10">
                                      <div
                                        className="progress-bar bg-primary aos"
                                        role="progressbar"
                                        data-aos="slide-right"
                                        data-aos-delay={200}
                                        data-aos-duration={1000}
                                        data-aos-easing="ease-in-out"
                                        style={{ width: "90%" }}
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>16</td>
                            <td>14</td>
                            <td>
                              <a
                                href="#"
                                className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"
                              >
                                <i className="bi bi-play-circle me-1" />
                                Continue
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      
                      </table>
                    </div>
                   
                    <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                    <nav
                        className="d-flex justify-content-center mb-0"
                        aria-label="navigation"
                      >
                        <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                          <li className="page-item mb-0">
                            <a className="page-link" href="#" tabIndex={-1}>
                              <i className="fas fa-angle-left" />
                            </a>
                          </li>
                          <li className="page-item mb-0">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item mb-0 active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item mb-0">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item mb-0">
                            <a className="page-link" href="#">
                              <i className="fas fa-angle-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                   
                  </div>
                
                </div>
                
              </div>
             
            </div>
          </div>
        </section>
      </main>

      <div className="back-top">
        <i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" />
      </div>
    </>
  );
};

export default Sessions;
