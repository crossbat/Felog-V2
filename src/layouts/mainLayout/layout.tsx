import Header from "../../components/header/header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen px-[60px] flex flex-col content-stretch">
      <div className="flex flex-0 shrink items-end">
        <Header />
      </div>
      <div className="flex flex-1 shrink-9 min-h-0 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
