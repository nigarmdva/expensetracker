import React, { useState } from "react";
import Barchart from "../../components/BarChart/Barchart";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Sidebar from "../../layout/sidebar/Sidebar";
import homeStyles from "./home.module.scss";
import useAuth from "../../store/auth";
export const SidebarContext = React.createContext();

function Home() {

  const isAuth=useAuth((state) => state.isAuth);
  const [sidebar, setSidebar] = useState(false);
  if(isAuth === false){
    window.location.href = "/register";
    return null;
  }
  return (
    <SidebarContext.Provider value={[ sidebar, setSidebar ]}  >
      <div className={homeStyles.main}>
        <Header />
        <Sidebar />
      </div>
      <Barchart/>
    </SidebarContext.Provider>
  );
}

export default Home;
