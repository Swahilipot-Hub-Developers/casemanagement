/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Banner = () => {
  return (
    <section className="pt-0">
      <div className="container-fluid px-0">
        <div
          className="bg-blue h-100px h-md-200px rounded-0"
          style={{
            background:
              "url(/assets/images/pattern/04.png) no-repeat center center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="container mt-n4">
        <div className="row">
          {/* Profile banner START */}
          <div className="col-12">
            <div className="card bg-transparent card-body p-0">
              <div className="row d-flex justify-content-between">
                {/* Avatar */}
                <div className="col-auto mt-4 mt-md-0">
                  <div className="avatar avatar-xxl mt-n3">
                    <img
                      className="avatar-img rounded-circle border border-white border-3 shadow"
                      src="/assets/images/avatar/01.jpg"
                      alt=""
                    />
                  </div>
                </div>
                {/* Profile info */}
                <div className="col d-md-flex justify-content-between align-items-center mt-4">
                  <div>
                    <h1 className="my-1 fs-4">
                      Mentor Dashboard
                      <i className="bi bi-patch-check-fill text-info small"></i>
                    </h1>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                        <i className="fas fa-user-graduate text-orange me-2"></i>
                        12 Enrolled Mentees
                      </li>
                      <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                        <i className="fas fa-book text-purple me-2"></i>2 Cases
                      </li>
                    </ul>
                  </div>
                  {/* Button */}
                  <div className="d-flex align-items-center mt-2 mt-md-0">
                    <Link
                      href="/mentor/cases/create"
                      className="btn btn-success mb-0"
                    >
                      Create a Case
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile banner END */}

            {/* Advanced filter responsive toggler START */}
            {/* Divider */}
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
                <i className="fas fa-sliders-h"></i>
              </button>
            </div>
            {/* Advanced filter responsive toggler END */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
