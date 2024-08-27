import { Outlet } from "react-router-dom";
import Header from "../ShareComponents/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
