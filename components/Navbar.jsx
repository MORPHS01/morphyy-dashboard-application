"use client"
import { useEffect } from 'react';
import Image from "next/image";

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Tooltip from '@mui/material/Tooltip';

import avatar from '@data/avatar.png';
import { useStateContext } from "@contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon }) => (
  <Tooltip title={title}>
    <button type="button" onClick={() => customFunc()} className="relative text-xl rounded-full p-3 hover:bg-light-gray text-myCyan">
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();


  useEffect(() => {
    function handleResize(){
      setScreenSize(window.innerWidth)
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  function handleActiveMenu(){ 
    setActiveMenu(!activeMenu)
  };

  return (
    <div className="flex justify-between p-2 md:mx-6 bg-white">
      <NavButton title="Menu" customFunc={handleActiveMenu} icon={<MenuIcon />} />

      <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} icon={<ShoppingCartOutlinedIcon />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} icon={<ChatBubbleOutlineIcon />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} icon={<NotificationsNoneIcon />} />
        <Tooltip title="Profile">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <Image className="rounded-full w-8 h-8" src={avatar} alt="user-profile"/>
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                David
              </span>
            </p>
            <KeyboardArrowDownIcon className="text-gray-400 text-14" />
          </div>
        </Tooltip>

        {/* {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)} */}
      </div>
    </div>
  );
};

export default Navbar;