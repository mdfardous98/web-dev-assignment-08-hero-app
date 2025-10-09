import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Bounce, ToastContainer,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {


  

  return (
    <div className="inter">
      <Navbar></Navbar>
      <Outlet
      ></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Layout;
