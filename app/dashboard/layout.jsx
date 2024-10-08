"use client"
import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { useStateContext } from "@contexts/ContextProvider";



function Layout({children}) {
    const { activeMenu } = useStateContext();

    

  return (
    <div className="flex">
        {activeMenu ? (
        <div className="w-72 fixed bg-white sidebar niceTransition">
            <Sidebar/>
        </div>
            ) : (
        <div className="w-0 md:niceTransition">
            <Sidebar/>
        </div>  
        )}

        <div className={`bg-white w-full ${activeMenu ? "md:ml-72 niceTransition" : "flex-2"}`}>
            <div className="static navbar flex flex-col w-full">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Layout