
const CTA = () => {
  return (
    <section className="py-0">
  <div className="container position-relative">
    <div className="row">
      <div className="col-12">
        <div className="bg-light rounded-3 position-relative p-3 p-sm-5">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              {/* Title */}
              <h6 className="text-primary">Newsletter</h6>
              <h2 className="mb-0">Subscribe Mail list!</h2>
              <p className="mb-0">
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced.
              </p>
            </div>
            {/* Form */}
            <div className="col-md-6">
              <form className="bg-body rounded-2 p-2">
                <div className="input-group">
                  <input
                    className="form-control border-0 me-1"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button type="button" className="btn btn-blue mb-0 rounded-2">
                    Subscribe!
                  </button>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </div>
    </div>{" "}
    {/* Row END */}
  </div>
</section>

  )
}

export default CTA