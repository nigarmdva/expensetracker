import React, { useContext, useState } from "react";
import headerStyles from "./header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarContext } from "../../pages/home/Home";
const Header = () => {
  const [sidebar, setSidebar] = useContext(SidebarContext);
  console.log(sidebar);
  return (
    <>
      <div className={headerStyles.header}>
        <div className={headerStyles.menu} onClick={() => {
          setSidebar(!sidebar)
        }}>
          <RxHamburgerMenu />
        </div>
        <div className={headerStyles.client_part}>
          <div className={headerStyles.notf_mail}>
            <div className={headerStyles.notification_part}>
              <div className={headerStyles.notification}></div>
              <img src="./img/bell.svg" alt="" />
            </div>
            <div className={headerStyles.mail_part}>
              <div className={headerStyles.mail}></div>
              <img src="./img/msg.svg" alt="" />
            </div>
          </div>
          <div className={headerStyles.client}>
            <img src="./img/client_img.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
