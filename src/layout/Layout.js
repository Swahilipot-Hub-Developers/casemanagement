import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
