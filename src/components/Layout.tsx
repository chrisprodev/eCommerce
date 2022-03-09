import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import { useWindowSize } from "../hooks/useWindowSize";
import { Size } from "../models/Hooks";
import { showMenu } from "../features/app/appSlice";
import { useAppSelector } from "../store/hooks";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const menuStatus = useAppSelector(showMenu);
  const size: Size = useWindowSize();

  return (
    <>
      <Navbar />
      {size && size.width && size.width < 1280 && menuStatus ? (
        <MobileMenu />
      ) : (
        children
      )}
      <Footer />
    </>
  );
};

export default Layout;
