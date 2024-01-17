import Layout from "../Layout";
import Banner from "./Banner";
import SideNav from "./SideNav";
const Mentor = ({ children }) => {
  return (
    <Layout>
      <Banner />
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <SideNav />
            <div className="col-xl-9">{children}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentor;
