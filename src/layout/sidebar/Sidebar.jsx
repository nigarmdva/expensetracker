import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../pages/home/Home";
import sidebarStyles from "./sidebar.module.scss";
import { MdClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";

function Sidebar() {
  const menuItems = [
    {
      icon: "./img/dashboard.svg",
      text: "Dashboard",
      submenu: ["Sales", "Default", "Dark menu"],
    },
    { icon: "./img/2.svg", text: "Apps" },
    { icon: "./img/3.svg", text: "Reports" },
    { icon: "./img/7 (1).svg", text: "Calendar" },
    { icon: "./img/8.svg", text: "Invoice" },
    {
      icon: "./img/8.svg",
      text: "Products",
      submenu: ["Products", "Product Details", "Cart", "Checkout"],
    },
  ];

  const [sidebar, setSidebar] = useContext(SidebarContext);
  const [sidebarClass] = useContext(SidebarContext);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleArrow = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (!sidebarClass) {
      setActiveIndex(null);
    }
  },[sidebarClass]);

  return (
    <div
      className={`${sidebarStyles.sidebar} ${
        sidebarClass ? sidebarStyles.active : ""
      }`}
    >
      <div
        className={sidebarStyles.close}
        onClick={() => {
          sidebar && setSidebar(false);
        }}
      >
        <MdClose />
      </div>
      <div className={sidebarStyles.logo}>
        <img src="./img/logo.png" alt="salaessa" />
      </div>
      <div className={sidebarStyles.menu}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={sidebarStyles.menu_item_container}>
              <div
                className={sidebarStyles.menu_item}
                onClick={() => toggleArrow(index)}
              >
                <div>
                  <img src={item.icon} alt="" />
                </div>
                <div className={sidebarStyles.link_container}>
                  <a href="#" className={sidebarStyles.link}>
                    {item.text}
                  </a>
                  <FaChevronRight
                    className={`${sidebarStyles.arrow} ${
                      activeIndex === index ? sidebarStyles.rotate : ""
                    } ${item.submenu ? "" : sidebarStyles.hide}`}
                  />
                </div>
              </div>
              <div className={sidebarStyles.submenu_container}>
                {activeIndex === index && (
                  <ul className={sidebarStyles.submenu}>
                    {item.submenu?.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href="#" className={sidebarStyles.sublink}>
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
