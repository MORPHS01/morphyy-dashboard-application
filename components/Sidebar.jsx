"use client"
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ClearIcon from '@mui/icons-material/Clear';
import { links } from "@data/dummyData";

import { useStateContext } from "@contexts/ContextProvider";
import { usePathname } from "next/navigation";



function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const pathname = usePathname()
 
  
  function handleCloseSideBar(){
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  function handleActiveMenu(){ 
    setActiveMenu(!activeMenu)
  };

 
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-myCyan"
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 hover:bg-gray-100"

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center mt-4">
            <Link href="/dashboard" onClick={handleCloseSideBar} className="items-center gap-3 ml-3  flex text-xl font-bold tracking-tight text-slate-900 hover:text-myCyan">
              ♛ <span>Morphyy</span>
            </Link>
            <Tooltip title="exit" className="hidden max-md:block">
              <IconButton onClick={handleActiveMenu} className="text-gray-500 text-xl">
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title} className="flex flex-col">
                <p className="text-gray-400 m-3 my-6 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <Link href={`/dashboard${link.web}`} key={link.name} onClick={handleCloseSideBar} className={ pathname === `/dashboard${link.web}` ? activeLink : normalLink}>
                    <div className="flex items-center">{link.icon} <span className="capitalize ml-4">{link.name}</span></div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar