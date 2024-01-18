import Link from "next/link";

const SideNav = () => {
  return (
    <div className="col-xl-3">
      {/* Responsive offcanvas body START */}
      <div
        className="offcanvas-xl offcanvas-end"
        tabIndex={-1}
        id="offcanvasSidebar"
      >
        {/* Offcanvas header */}
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
        {/* Offcanvas body */}
        <div className="offcanvas-body p-3 p-xl-0">
          <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
            {/* Dashboard menu */}
            <div className="list-group list-group-dark list-group-borderless">
              <Link
                className="list-group-item"
                href="/mentor"
              >
                <i className="bi bi-ui-checks-grid fa-fw me-2" />
                My Dashboard
              </Link>
              <Link
                className="list-group-item"
                href="/mentor/cases"
              >
                <i className="bi bi-basket fa-fw me-2" />
                My Cases
              </Link>
              <Link className="list-group-item" href="/mentor/cases/sessions">
                <i className="bi bi-question-diamond fa-fw me-2" />
                Sessions
              </Link>
              <Link className="list-group-item" href="/mentor/cases/reports">
                <i className="bi bi-graph-up fa-fw me-2" />
                My Reports
              </Link>
             
              <Link
                className="list-group-item"
                href="/mentor/profile"
              >
                <i className="bi bi-pencil-square fa-fw me-2" />
                My Profile
              </Link>
              <a
                className="list-group-item text-danger bg-danger-soft-hover"
                href="sign-in.html"
              >
                <i className="fas fa-sign-out-alt fa-fw me-2" />
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive offcanvas body END */}
    </div>
  );
};

export default SideNav;
