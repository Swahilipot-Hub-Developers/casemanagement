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
                <label className="form-label fw-bold">First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="First name"
                />
              </div>

              <div className="col-lg-6 fw-bold">
                <label className="form-label">Second Name *</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="First name"
                />
              </div>
              {/* Email */}
              <div className="col-lg-6 fw-bold">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" />
              </div>
              {/* Number */}
              <div className="col-lg-6 fw-bold">
                <label className="form-label">Phone Number *</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-lg-6 fw-bold">
                <label className="form-label">County of residence*</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="County"
                />
              </div>

              <div class="container">
  <div class="row">
    
    <div class="col-12 col-md-6 mb-3">
      <label for="disability" className="form-label fw-bold">Are you a person with disability?*</label>
      <select className="form-select">
        <option>--</option>
        <option>YES</option>
        <option>NO</option>
      </select>
    </div>

   
    <div class="col-12 col-md-6 mb-3">
      <label for="subCounty" className="form-label fw-bold">Sub County of residence*</label>
      <select  className="form-select">
        <option>--</option>
        <option>Mvita</option>
        <option>Nyali</option>
        <option>Kisauni</option>
        <option>Likoni</option>
        <option>Changamwe</option>
        <option>Jomvu</option>
      </select>
    </div>

    
    <div class="col-12 col-md-6 mb-3">
      <label for="employment" className="form-label fw-bold">Are you employed?*</label>
      <select className="form-select">
        <option>--</option>
        <option>YES</option>
        <option>NO</option>
      </select>
    </div>

   
    <div className="col-12 col-md-6 mb-3">
      <label for="business" className="form-label fw-bold">Are you running a business?*</label>
      <select class="form-select">
        <option>--</option>
        <option>YES</option>
        <option>NO</option>
      </select>
    </div>
  </div>
</div>
              <div className="col-12">
                <label className="form-label fw-bold">Whats your area of interest?*</label>
                <textarea
                  className="form-control"
                  rows={3}
                  spellCheck="false"
                  defaultValue={""}
                 />
              </div> 

<div className="col-12 col-md-6 mb-3">
      <label for="business" className="form-label fw-bold">What is your area of interest?*</label>
      <select class="form-select">
        <option>--</option>
        <option>TVET</option>
        <option>Health</option>
        <option>TOURISM</option>
      </select>
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
