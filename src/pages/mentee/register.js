import Layout from "@/layout/Layout";
const register = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row g-5 justify-content-between">
            {/* Admission form START */}
            <div className="col-md-8 mx-auto">
              {/* Title */}
              <h2 className="mb-3">Register as a Mentee</h2>
              <p>
                By filling this form successfully you agree to be actively
                engaged to be one of our mentees
              </p>
            </div>
            <form className="row g-3 mt-2 position-relative z-index-9">
              {/* Name */}
              <div className="col-lg-6">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="First name"
                />
              </div>
              {/* Email */}
              <div className="col-lg-6">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" />
              </div>
              {/* Number */}
              <div className="col-lg-12">
                <label className="form-label">Phone Number *</label>
                <input type="text" className="form-control" />
              </div>
              {/* Textarea */}
              <div className="col-12">
                <label className="form-label">Add Summary *</label>
                <textarea
                  className="form-control"
                  rows={3}
                  spellCheck="false"
                  defaultValue={""}
                />
              </div>
              {/* Button */}
              <div className="col-12">
                <button type="submit" className="btn btn-primary mb-0">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default register;
