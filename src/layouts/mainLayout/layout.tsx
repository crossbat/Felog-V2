import Header from "../../components/header/header";
import { Outlet } from "react-router";
import { useHeaderDropdownStatusStore } from "../../stores/headerStores";
import { EmptySpace, HeaderMenuDiv } from "./layoutStyles";
import HeaderDropDown from "../../components/header/headerDropDown";
const MainLayout = () => {
  const { isOpened } = useHeaderDropdownStatusStore();
  return (
    <>
      <HeaderMenuDiv $opened={isOpened}>
        <EmptySpace />
        <HeaderDropDown isOpened={isOpened} />
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
