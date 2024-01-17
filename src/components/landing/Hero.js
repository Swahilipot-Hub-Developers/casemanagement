/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="overflow-hidden pt-6 pt-xxl-0">
      <div className="container-fluid">
        <div className="row g-4 g-md-5 align-items-center justify-content-between	mb-xxl-n7">
          {/* Left image side START */}
          <div className="col-lg-3 col-xl-4 col-xxl-3 d-none d-lg-block">
            <div className="row g-md-5 align-items-center ms-n6">
              <div className="col-6">
                <img
                  src="assets/images/bg/3by4/07.jpg"
                  className="rounded-3 mt-6 mb-5"
                  alt=""
                />
                <img
                  src="assets/images/bg/3by4/06.jpg"
                  className="rounded-3"
                  alt=""
                />
              </div>
              <div className="col-6 position-relative">
                <img
                  src="assets/images/bg/3by4/05.jpg"
                  className="rounded-3"
                  alt=""
                />
                {/* Svg element decoration */}
                <img
                  src="assets/images/element/17.svg"
                  className="h-60px position-absolute top-0 start-0 ms-3 mt-n3"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Left image side END */}
          {/* Main content */}
          <div className="col-lg-6 col-xl-4 col-xxl-5 text-center position-relative">
            {/* Title */}
            <h1 className="display-6">
              Discover best classes for the best learning
            </h1>
            {/* Svg decoration */}
            <figure className="position-absolute top-0 start-100 translate-middle pe-7 pb-4">
              <svg width="94.5px" height="67.6px" viewBox="0 0 94.5 67.6">
                <path
                  className="fill-purple"
                  d="M15.1,3.4c-0.3,0.4-0.4,1-0.1,1.5l2,3.2l-1.3,1.7c-1-0.2-1.9,0.2-2.5,1c-0.5,0.7-0.6,1.6-0.3,2.4l-9.2,9.5
							c-0.6,0.8-0.8,1.8-0.7,2.7c0.2,0.9,0.7,1.7,1.4,2.1c1.4,0.8,3.3,0.4,4.3-1.1l6.4-11.6c0.8,0,1.6-0.3,2.1-1c0.6-0.8,0.6-1.8,0.2-2.7
							l0.8-1l9.7,15.4l-8.6,8.4c-0.2,0.1-0.4,0.3-0.6,0.5c0,0-0.1,0.1-0.1,0.1l-0.4,0.4l0.2,0.1c-0.6,2.1,1.7,5.4,3.9,7.9
							c3.2,3.8,8.1,8.2,13.6,12.2l0.3,0.2c5.4,4,10.9,7.3,15.4,9.3c3,1.3,6.9,2.6,8.7,1.4l0.2,0.2l6.2-11.9l23.8,6.7
							c0.6,0.1,1.1-0.1,1.4-0.5c0-0.1,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.1-0.2c0.3-0.4,0.4-1,0.1-1.5L67.4,13.8c-0.2-0.3-0.5-0.6-0.9-0.7
							L16.7,2.6c-0.5-0.1-1.1,0.1-1.4,0.5c0,0.1-0.1,0.1-0.1,0.2C15.2,3.3,15.1,3.4,15.1,3.4z M7.7,25.8c-0.6,0.9-1.8,1.2-2.6,0.7
							c-0.4-0.3-0.8-0.7-0.9-1.3c-0.1-0.6,0-1.2,0.4-1.7l9-9.2l0,0c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0.1,0,0.1,0.1L7.7,25.8z M14.2,11.5
							c0.4-0.6,1.3-0.7,1.8-0.3c0.6,0.4,0.7,1.3,0.3,1.8c-0.4,0.5-1,0.7-1.6,0.4c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.3-0.4l0-0.1
							C13.9,12.5,13.9,11.9,14.2,11.5z M21.5,33.5L36,19.2l0-0.1c0.7-0.9,9.7,1.5,20.1,9.1l0.2,0.1c5.9,4.4,9.5,8.5,11.1,10.6
							c2.8,3.6,3.2,5.4,3,5.7l0,0.1l-9.5,18.2c-1-3-4.8-7.5-10.7-12.7l-3.4-2.5c-0.3-0.2-0.6-0.4-0.9-0.6c-0.8-0.5-1.8-1.1-3.1-1.4
							c-0.1,0-0.1,0-0.2,0c0,0,0-0.1-0.1-0.2c-0.6-1.2-1.5-2-2.2-2.6c-0.3-0.2-0.6-0.5-0.8-0.7l-3.3-2.4C29.8,35.8,24.6,33.6,21.5,33.5z
							M35.1,18.3c0,0.1-0.1,0.1-0.1,0.2l-6.2,6.1L16,4.3c0,0,0-0.1,0-0.2c0-0.1,0.1-0.1,0.2-0.1l49.4,11.1c0,0,0,0,0.1,0c0,0,0,0,0,0
							L91,59.6c0,0.1,0,0.1,0,0.2c0,0.1-0.1,0.1-0.2,0.1l-23.5-6.6l4.2-8c1-1.5-1.5-5.1-3.1-7.1c-2.9-3.7-6.9-7.5-11.4-10.8l-0.2-0.1
							C47.8,20.5,36.8,16,35.1,18.3z M59.8,64.9c-0.6,0.8-2.9,0.8-7.7-1.3c-4.4-1.9-9.8-5.2-15.2-9.2c-0.1-0.1-0.2-0.1-0.2-0.2
							c-5.4-4-10.2-8.3-13.4-12.1c-3.4-4-4.1-6.3-3.5-7c1-1.4,6.9,0.2,15.8,5.6l3.2,2.3c0.2,0.2,0.5,0.4,0.8,0.6c0.7,0.6,1.4,1.2,1.9,2.2
							c0.1,0.2,0.1,0.3,0.2,0.4l0.1,0.3l0.3,0c0.1,0,0.2,0,0.4,0.1c1.2,0.2,2,0.7,2.7,1.2c0.3,0.2,0.6,0.4,0.9,0.6l3.4,2.5
							C57.5,58.1,60.8,63.5,59.8,64.9z"
                />
              </svg>
            </figure>
            <p>
              Online learning and teaching marketplace with 5K+ courses &amp;
              10M students. Taught by experts to help you acquire new skills.
            </p>
            {/* Buttons */}
            <div className="d-sm-flex align-items-center justify-content-center">
              {/* Button */}
              <a href="#" className="btn btn-lg btn-warning me-2 mb-4 mb-sm-0">
                View Courses
                <i className="bi bi-arrow-right ms-2" />
              </a>
              {/* Video button */}
              <div className="d-flex align-items-center justify-content-center py-2 ms-0 ms-sm-4">
                <a
                  data-glightbox=""
                  data-gallery="office-tour"
                  href="https://www.youtube.com/embed/tXHviS-4ygo"
                  className="btn btn-lg btn-round btn-light mb-0 overflow-visible me-7"
                >
                  <i className="fas fa-play" />
                  <h6 className="mb-0 ms-2 fw-normal position-absolute start-100 top-50 translate-middle-y">
                    Watch video
                  </h6>
                </a>
              </div>
            </div>
          </div>
          {/* Right image side START */}
          <div className="col-lg-3 col-xl-4 col-xxl-3">
            <div className="row g-4 align-items-center me-n4">
              {/* Images */}
              <div className="col-4">
                <img
                  src="assets/images/bg/3by4/01.jpg"
                  className="rounded-3"
                  alt=""
                />
              </div>
              {/* Images */}
              <div className="col-5 position-relative">
                <img
                  src="assets/images/bg/3by4/02.jpg"
                  className="rounded-3 mb-5"
                  alt=""
                />
                <img
                  src="assets/images/bg/3by4/03.jpg"
                  className="rounded-3 mb-n5"
                  alt=""
                />
                {/* Content */}
                <div className="p-3 card card-body shadow position-absolute top-0 start-0 translate-middle z-index-1 d-none d-xxl-block mt-6 ms-n7">
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Icon */}
                    <div className="icon-md text-bg-orange rounded-2 flex-shrink-0">
                      <i className="bi bi-star-fill" />
                    </div>
                    {/* Info */}
                    <h6 className="mb-0 small mb-0 ms-3">
                      Over 1M Students have given a five star review to their
                      tutors
                    </h6>
                  </div>
                </div>
              </div>
              {/* Images */}
              <div className="col-3">
                <img
                  src="assets/images/bg/3by4/04.jpg"
                  className="rounded-3 mt-7 mb-5"
                  alt=""
                />
                <img
                  src="assets/images/bg/3by4/08.jpg"
                  className="rounded-3 mb-n8"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Right image side END */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
