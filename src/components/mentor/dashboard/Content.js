/* eslint-disable @next/next/no-img-element */

const Content = () => {
  return (
    <>
      <div className="row g-4">
        {/* Counter item */}
        <div className="col-sm-6 col-lg-4">
          <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
            <span className="display-6 text-warning mb-0">
              <i className="fas fa-tv fa-fw" />
            </span>
            <div className="ms-4">
              <div className="d-flex">
                <h5 className="purecounter mb-0 fw-bold">0</h5>
              </div>
              <span className="mb-0 h6 fw-light">Total Cases</span>
            </div>
          </div>
        </div>
        {/* Counter item */}
        <div className="col-sm-6 col-lg-4">
          <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
            <span className="display-6 text-purple mb-0">
              <i className="fas fa-user-graduate fa-fw" />
            </span>
            <div className="ms-4">
              <div className="d-flex">
                <h5 className="purecounter mb-0 fw-bold">0</h5>
              </div>
              <span className="mb-0 h6 fw-light">Mentees</span>
            </div>
          </div>
        </div>
        {/* Counter item */}
        <div className="col-sm-6 col-lg-4">
          <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
            <span className="display-6 text-info mb-0">
              <i className="fas fa-gem fa-fw" />
            </span>
            <div className="ms-4">
              <div className="d-flex">
                <h5 className="purecounter mb-0 fw-bold">0</h5>
              </div>
              <span className="mb-0 h6 fw-light">Sessions</span>
            </div>
          </div>
        </div>
      </div>
      {/* Counter boxes END */}
      {/* Course List table START */}
     
    </>
  );
};

export default Content;
