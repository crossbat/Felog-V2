import Header from "../../components/header/header";
import { Outlet } from "react-router";
import { useHeaderDropdownStatusStore } from "../../stores/headerStores";
import { HeaderMenuDiv } from "./layoutStyles";

const MainLayout = () => {
  const { isOpened } = useHeaderDropdownStatusStore();
  return (
    <>
      <HeaderMenuDiv $opened={isOpened}>
        <div className="h-[80px]" />
        <div className="flex-1 py-5 px-[var(--sidebar-padding)]"></div>
      </HeaderMenuDiv>
      <div className="w-screen h-screen flex flex-col content-stretch overflow-y-scroll">
        <Header />
        <div className="relative">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
