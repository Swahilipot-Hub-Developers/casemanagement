import Mentee from "@/layout/mentee/Mentee";

const ViewMentors = () => {
  return (
    <Mentee>
      <main>
        <section className="py-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-dark p-4 text-center rounded-3">
                  <h1 className="text-white m-0">Mentors</h1>
                  <div className="d-flex justify-content-center">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Mentor list
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-4">
          <div className="container">
            <div className="row mb-4 align-items-center">
              <div className="col-sm-6 col-xl-4">
                <form className="border rounded p-2">
                  <div className="input-group input-borderless">
                    <input
                      className="form-control me-1"
                      type="search"
                      placeholder="Search Mentor"
                    />
                    <button
                      type="button"
                      className="btn btn-primary mb-0 rounded"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-sm-6 col-xl-3 mt-3 mt-lg-0">
                <form className="border rounded p-2 input-borderless">
                  <select
                    className="form-select form-select-sm js-choice"
                    aria-label=".form-select-sm"
                  >
                    <option value="">Category</option>
                    <option>Currently Employed</option>
                    <option>Running a business</option>
                    <option>TVET </option>
                    <option>Health</option>
                  </select>
                </form>
              </div>
              <div className="col-sm-6 col-xl-3 mt-3 mt-xl-0"></div>
              <div className="col-sm-6 col-xl-2 mt-3  d-grid">
                <a href="#" className="btn btn-sm btn-primary mb-0">
                  Filter Results
                </a>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-10 col-xl-6">
                <div className="card shadow p-2">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                          <div>
                            <h5 className="card-title mb-0">
                              <a href="#">Dennis Barrett</a>
                            </h5>
                          </div>
                        </div>
                        <p className="text-truncate-2 mb-3">
                          Perceived end knowledge certainly day sweetness why
                          cordially. Ask a quick six seven offer see among.
                        </p>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <h6 className="text-orange mb-0">
                            Digital Marketing
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-xl-6">
                <div className="card shadow p-2">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                          <div>
                            <h5 className="card-title mb-0">
                              <a href="#">Dennis Barrett</a>
                            </h5>
                          </div>
                        </div>
                        <p className="text-truncate-2 mb-3">
                          Perceived end knowledge certainly day sweetness why
                          cordially. Ask a quick six seven offer see among.
                        </p>
                        {/* Info */}
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          {/* Title */}
                          <h6 className="text-orange mb-0">
                            Digital Marketing
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-xl-6">
                <div className="card shadow p-2">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                          <div>
                            <h5 className="card-title mb-0">
                              <a href="#">Dennis Barrett</a>
                            </h5>
                          </div>
                        </div>
                        <p className="text-truncate-2 mb-3">
                          Perceived end knowledge certainly day sweetness why
                          cordially. Ask a quick six seven offer see among.
                        </p>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <h6 className="text-orange mb-0">
                            Digital Marketing
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-xl-6">
                <div className="card shadow p-2">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                          <div>
                            <h5 className="card-title mb-0">
                              <a href="#">Dennis Barrett</a>
                            </h5>
                          </div>
                        </div>
                        <p className="text-truncate-2 mb-3">
                          Perceived end knowledge certainly day sweetness why
                          cordially. Ask a quick six seven offer see among.
                        </p>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <h6 className="text-orange mb-0">
                            Digital Marketing
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-10 col-xl-6">
                <div className="card shadow p-2">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                          <div>
                            <h5 className="card-title mb-0">
                              <a href="#">Dennis Barrett</a>
                            </h5>
                          </div>
                        </div>
                        <p className="text-truncate-2 mb-3">
                          Perceived end knowledge certainly day sweetness why
                          cordially. Ask a quick six seven offer see among.
                        </p>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <h6 className="text-orange mb-0">
                            Digital Marketing
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-xl-6">
                <div className="card shadow p-2">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                          <div>
                            <h5 className="card-title mb-0">
                              <a href="#">Dennis Barrett</a>
                            </h5>
                          </div>
                        </div>
                        <p className="text-truncate-2 mb-3">
                          Perceived end knowledge certainly day sweetness why
                          cordially. Ask a quick six seven offer see among.
                        </p>
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                          <h6 className="text-orange mb-0">
                            Digital Marketing
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav
                className="mt-4 d-flex justify-content-center"
                aria-label="navigation"
              >
                <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                  <li className="page-item mb-0">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <i className="fas fa-angle-double-left" />
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
                      ..
                    </a>
                  </li>
                  <li className="page-item mb-0">
                    <a className="page-link" href="#">
                      6
                    </a>
                  </li>
                  <li className="page-item mb-0">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container position-relative">
            <figure className="position-absolute top-50 start-50 translate-middle ms-2">
              <svg>
                <path
                  d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"
                  fill="#fff"
                  fillRule="evenodd"
                  opacity=".502"
                />
                <path
                  d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"
                  fill="#fff"
                  fillRule="evenodd"
                  opacity=".102"
                />
                <path
                  d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"
                  fill="#fff"
                  fillRule="evenodd"
                  opacity=".2"
                />
                <path
                  d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"
                  fill="#fff"
                  fillRule="evenodd"
                  opacity=".2"
                />
              </svg>
            </figure>
          </div>
        </section>
      </main>

      <div className="back-top">
        <i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" />
      </div>
    </Mentee>
  );
};

export default ViewMentors;
