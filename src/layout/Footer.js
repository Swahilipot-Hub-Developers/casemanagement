/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="container">
        {/* Row START */}
        <div className="row g-4 justify-content-between">
          {/* Widget 1 START */}
          <div className="col-md-5 col-lg-4">
            {/* logo */}
            <Link className="me-0" href="/">
              <img
                className="light-mode-item h-40px"
                src="/logo.png"
                alt="logo"
              />
              <img
                className="dark-mode-item h-40px"
                src="/logo.png"
                alt="logo"
              />
            </Link>
            <p className="my-3">CaseManagement is about bla bla</p>
            {/* Newsletter */}
            <form className="row row-cols-lg-auto g-2">
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark m-0">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          {/* Widget 1 END */}
          {/* Widget 2 START */}
          <div className="col-md-7 col-lg-6">
            <div className="row g-4 g-lg-5">
              {/* Link block */}
              <div className="col-6 col-sm-4">
                <h5 className="mb-2 mb-md-3">Company</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Swahilipot
                    </a>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-6 col-sm-4">
                <h5 className="mb-2 mb-md-3">Mentoring</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link pt-0" href="/mentor/register">
                      Become a Mentor
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/mentor/registe">
                      Become a Mente
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-6 col-sm-4">
                <h5 className="mb-2 mb-md-3">Follow Us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link pt-0" href="#">
                      <i className="fab fa-whatsapp fa-fw me-1" />
                      WhatsApp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fab fa-youtube fa-fw me-1" />
                      YouTube
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="far fa-envelope fa-fw me-1" />
                      Newsletters
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-instagram fa-fw me-1" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Widget 2 END */}
        </div>
        {/* Row END */}
        <hr /> {/* Divider */}
        {/* Bottom footer */}
        <div className="row">
          <div className="col-12">
            <div className="d-md-flex justify-content-between align-items-center pt-2 pb-4 text-center">
              {/* copyright text */}
              <div className="text-primary-hover">
                {" "}
                Copyrights ©2023 Eduport. Build by{" "}
                <a
                  href="https://www.webestica.com/"
                  target="_blank"
                  className="text-reset"
                >
                  Webestica
                </a>
                .
              </div>
              {/* copyright links*/}
              <div className="nav justify-content-center mt-3 mt-md-0">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="nav-link" href="#">
                      Terms of use
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link" href="#">
                      Privacy policy
                    </a>
                  </li>
                  <li className="list-inline-item pe-0">
                    <a className="nav-link" href="#">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
