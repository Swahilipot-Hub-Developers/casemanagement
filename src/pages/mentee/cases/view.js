import Mentee from "@/layout/mentee/Mentee";

const ActiveCases = () => {
  const cases = [
    {
      title: "Health",
    },
    {
      title: "Tvet Course",
    },
    {
      title: "Currently Employed",
    },
    {
      title: "Running business",
    },
  ];

  return (
    <Mentee>
      <div>
        <h1>Active Cases</h1>

        <div>
          <select id="sort">
            <option value="Health">Health</option>
            <option value="TVET Courses">TVET Courses</option>
            <option value="Currently employed">Currently employed </option>
            <option value="Running business">Running Business</option>
          </select>
          <label htmlFor="sort" className="m-2">
            Sort by
          </label>
        </div>
        <div>
          <input type="text" id="search" />
          <label className="btn btn-primary m-2 btn-sm " htmlFor="search">
            Search
          </label>
        </div>
        <br />

        <br />

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Case Title</th>
              <th scope="col">Pathway</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Case 1</td>
              <td>Health</td>
              <td>Active</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Case 2</td>
              <td> TVET Course</td>
              <td>Not Active</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Case 3</td>
              <td>Currently Employed</td>
              <td>Active</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Case 4</td>
              <td>Running a business</td>
              <td>Active</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Case 5</td>
              <td>Crative Arts</td>
              <td>Active</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Case 6</td>
              <td>Enterprenurship</td>
              <td>Active</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Case 7</td>
              <td>Hospitality and Tourism</td>
              <td>Active</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Case 8</td>
              <td>Digital literacy</td>
              <td>Active</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Case 9</td>
              <td>Currently Employed</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>

        {/* pagination */}

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
    </Mentee>
  );
};

export default ActiveCases;
