import { useState } from "react";
import UserNav from "./userNavi";
import {
  HeaderInnerDiv,
  HeaderMain,
  LogoImage,
  MenuImage,
} from "./headerStyles";
import { useHeaderDropdownStatusStore } from "../../stores/headerStores";

const Header = () => {
  const { isOpened, setStatusChange } = useHeaderDropdownStatusStore();
  const [userSwitch, setUserSwitch] = useState(false);
  const logoSrc = "../../../assets/logo.png";
  return (
    <HeaderMain>
      <HeaderInnerDiv>
        <a href="#" onClick={() => setUserSwitch(!userSwitch)}>
          <LogoImage src={logoSrc} alt="logo" $opened={isOpened} />
        </a>
        {userSwitch ? <UserNav /> : <></>}
        {userSwitch ? (
          <div className="rounded-full h-[50px] w-[50px] bg-amber-100" />
        ) : (
          <div className="flex items-center">
            <MenuImage
              src="../../../assets/menu.png"
              $opened={isOpened}
              onClick={() => setStatusChange()}
            />
          </div>
        )}
      </HeaderInnerDiv>
    </HeaderMain>
  );
};

export default Header;
