import Header from "../../components/header/header";
import { Outlet } from "react-router";
import { useHeaderDropdownStatusStore } from "../../stores/headerStores";
import { EmptySpace, HeaderMenuDiv } from "./layoutStyles";
import HeaderDropDown from "../../components/header/Dropdown/headerDropDown";
import { locationCheck } from "../../utils/locationCheck";
const MainLayout = () => {
  const { isOpened } = useHeaderDropdownStatusStore();
  const SignPageCheck = locationCheck("/sign");
  return (
    <>
      <HeaderMenuDiv $opened={isOpened}>
        <div className="overflow-hidden">
          <EmptySpace />
          <HeaderDropDown isOpened={isOpened} />
        </div>
      </HeaderMenuDiv>
      <div className="w-screen h-screen flex flex-col content-stretch">
        <Header />
        <div
          className={SignPageCheck ? "overflow-hidden" : "overflow-y-scroll"}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
