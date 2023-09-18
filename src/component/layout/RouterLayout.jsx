import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import BreadCrumb from "../BreadCrumb";

function RouterLayout() {
  return (
    <>
      <Header />
      <BreadCrumb />
      <Outlet />
      <Footer />
    </>
  );
}

export default RouterLayout;
