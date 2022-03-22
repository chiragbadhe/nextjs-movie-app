import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[#010309]">
      <Meta />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />

      </div>
    </>
  );
};

export default Layout;
