import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addInstalledApp } from "../utils/LocalDB";

const Layout = () => {
  const [installCard, setInstallCard] = useState(() => addInstalledApp());

  const notify = (toaster) => toast(toaster);

  const handleInstallBtn = (singleApp) => {
    setInstallCard((prev) => [...prev, singleApp]);

    notify("App installed successfully!");
  };

  return (
    <div className="inter">
      <Navbar></Navbar>
      <Outlet
        context={{ handleInstallBtn, installCard, setInstallCard, notify }}
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
