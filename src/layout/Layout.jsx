"use client"

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";



const Layout = ({ children }) => {

  return (
    <>
    
        <Header/>
        <div className="h-[1000px]">
            {children}
        </div>
        <Footer/>

    </>
  );
};

export default Layout;
