import Header from "../../components/header/header";
import { Outlet } from "react-router";
import { useHeaderDropdownStatusStore } from "../../stores/headerStores";
import { EmptySpace, HeaderMenuDiv } from "./layoutStyles";
import HeaderDropDown from "../../components/header/Dropdown/headerDropDown";
import { locationCheck } from "../../utils/locationCheck";
import { PageBlurFilter } from "../../styles/commonDivStyles";
import { useNotePopupToggleStore } from "../../stores/dashboardStores";
const MainLayout = () => {
  const { isOpened } = useHeaderDropdownStatusStore();
  const { isOpen } = useNotePopupToggleStore();
  const SignPageCheck = locationCheck("/sign");
  return (
    <>
      <PageBlurFilter $blur={isOpen} />
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
