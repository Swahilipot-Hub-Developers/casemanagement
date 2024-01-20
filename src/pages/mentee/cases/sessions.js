import Mentee from "@/layout/mentee/Mentee";

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
                    {/* Avatar */}
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

                    {/* Profile info */}
                    <div className="col d-sm-flex justify-content-between align-items-center">
                      <div>
                        <h1 className="my-1 fs-4">Lori Stevens</h1>
                        <ul className="list-inline mb-0">
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
                      {/* Button */}
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
                {/* Advanced filter responsive toggler START */}

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
                {/* Advanced filter responsive toggler END */}
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row">
              {/* Left sidebar START */}
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
                    <div className="bg-dark border rounded-3 p-3 w-100"></div>
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
                        <p className="mb-0 h6 fw-light">Total Courses</p>
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
                  {/* Counter item */}
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
                    <h3 className="mb-0">My Courses List</h3>
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
                      {/* Select option */}
                      <div className="col-md-3">
                        {/* Short by filter */}
                        <form>
                          <select
                            className="form-select js-choice border-0 z-index-9 bg-transparent"
                            aria-label=".form-select-sm"
                          >
                            <option value="">Sort by</option>
                            <option>Completed</option>
                            <option>In progress</option>
                          </select>
                        </form>
                      </div>
                    </div>
                    <div className="table-responsive border-0">
                      <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                        <thead>
                          <tr className="table">
                            <th scope="col" class="border-0 rounded-start">
                              Course Title
                            </th>
                            <th scope="col" class="border-0">
                              Total Lectures
                            </th>
                            <th scope="col" class="border-0">
                              Completed Lecture
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
                              </div>
                            </td>

                            <td>56</td>

                            <td>40</td>

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
                                    src="assets/images/courses/4by3/03.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  <h6>
                                    <a href="#">
                                      Create a Design System in Figma
                                    </a>
                                  </h6>
                                  {/* Info */}
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
                            {/* Table data */}
                            <td>42</td>
                            {/* Table data */}
                            <td>42</td>
                            {/* Table data */}
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
                          {/* Table item */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center">
                                {/* Image */}
                                <div className="w-100px">
                                  <img
                                    src="assets/images/courses/4by3/05.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6>
                                    <a href="#">
                                      The Complete Web Development in python
                                    </a>
                                  </h6>
                                  {/* Info */}
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
                            {/* Table data */}
                            <td>28</td>
                            {/* Table data */}
                            <td>12</td>
                            {/* Table data */}
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
                          {/* Table item */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center">
                                {/* Image */}
                                <div className="w-100px">
                                  <img
                                    src="assets/images/courses/4by3/01.jpg"
                                    className="rounded"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6>
                                    <a href="#">
                                      Digital Marketing Masterclass
                                    </a>
                                  </h6>
                                  {/* Info */}
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
                            {/* Table data */}
                            <td>32</td>
                            {/* Table data */}
                            <td>18</td>
                            {/* Table data */}
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
                                {/* Image */}
                                <div className="w-100px"></div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6>
                                    <a href="#">Graphic Design Masterclass</a>
                                  </h6>
                                  {/* Info */}
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
                        {/* Table body END */}
                      </table>
                    </div>
                    {/* Course list table END */}
                    {/* Pagination START */}
                    <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                      {/* Content */}
                      <p className="mb-0 text-center text-sm-start">
                        Showing 1 to 8 of 20 entries
                      </p>
                      {/* Pagination */}
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
                    {/* Pagination END */}
                  </div>
                  {/* Card body START */}
                </div>
                {/* Main content END */}
              </div>
              {/* Row END */}
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
