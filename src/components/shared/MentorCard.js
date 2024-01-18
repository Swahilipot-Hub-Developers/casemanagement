/* eslint-disable @next/next/no-img-element */

const MentorCard = () => {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="card p-2 shadow h-100">
        <div className="card-image-scale rounded-3 position-relative">
          {/* Card Image */}
          <img
            src="assets/images/instructor/01.jpg"
            className="card-img"
            alt=""
          />
          {/* Overlay */}
          <div className="card-img-overlay d-flex flex-column p-2 z-index-1">
            <div>
              <span className="badge text-bg-dark">
                <i className="bi bi-star-fill text-warning me-2" />
                4.3
              </span>
            </div>
          </div>
        </div>
        {/* Card body */}
        <div className="card-body px-2">
          {/* Title */}
          <h5 className="card-title">
            <a href="workshop-detail.html" className="stretched-link">
              John Doe
            </a>
          </h5>
          <h6 className="mb-0 fw-normal">Professor of Mathematics</h6>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
