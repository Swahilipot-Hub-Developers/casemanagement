/* eslint-disable @next/next/no-img-element */
import Mentee from "@/layout/mentee/Mentee";

const CaseTableRow = ({ caseTitle, onEdit, onDelete }) => {
  return (
    <tr>
      {/* Course item */}
      <td>
        <div className="d-flex align-items-center">
          <h6 className="mb-0 ms-2 table-responsive-title">
            <a href="#">{caseTitle}</a>
          </h6>
        </div>
      </td>
      {/* Action item */}
      <td>
        <a
          href="#"
          className="btn btn-sm btn-success-soft btn-round me-1 mb-0"
          onClick={onEdit}
        >
          <i className="far fa-fw fa-edit" />
        </a>
        <button
          className="btn btn-sm btn-danger-soft btn-round mb-0"
          onClick={onDelete}
        >
          <i className="fas fa-fw fa-times" />
        </button>
      </td>
    </tr>
  );
};

const index = () => {
  const tableRows = [
    {
      caseTitle: "Leadership Mentorship",
      onEdit: () => console.log("Edit clicked"),
      onDelete: () => console.log("Delete clicked"),
    },
    {
      caseTitle: "Business",
      onEdit: () => console.log("Edit clicked"),
      onDelete: () => console.log("Delete clicked"),
    },
  ];
  return (
    <Mentee className="row">
      <div className="col-12">
        <div className="card border bg-transparent rounded-3 mt-5">
          {/* Card header START */}
          <div className="card-header bg-transparent border-bottom">
            <div className="d-sm-flex justify-content-sm-between align-items-center">
              <h3 className="mb-2 mb-sm-0">My Cases</h3>
            </div>
          </div>
          {/* Card header END */}
          {/* Card body START */}
          <div className="card-body">
            <div className="table-responsive border-0 rounded-3">
              {/* Table START */}
              <table className="table table-dark-gray align-middle p-4 mb-0">
                {/* Table head */}
                <thead>
                  <tr>
                    <th scope="col" className="border-0 rounded-start">
                      Case Title
                    </th>
                    <th scope="col" className="border-0 rounded-end">
                      Action
                    </th>
                  </tr>
                </thead>
                {/* Table body START */}
                <tbody>
                  {tableRows.map((rowData, index) => (
                    <CaseTableRow key={index} {...rowData} />
                  ))}
                </tbody>
                {/* Table body END */}
              </table>
              {/* Table END */}
            </div>
            {/* Pagination */}
            <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-3">
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
          </div>
          {/* Card body START */}
        </div>
      </div>
    </Mentee>
  );
};

export default index;
