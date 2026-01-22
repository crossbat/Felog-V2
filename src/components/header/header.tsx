import {
  HeaderInnerDiv,
  HeaderMain,
  LogoImage,
  MenuImage,
} from "./headerStyles";
import { useHeaderDropdownStatusStore } from "../../stores/headerStores";
import { locationCheck } from "../../utils/locationCheck";
import { useNavigate } from "react-router";

const Header = () => {
  const signPageDetection = locationCheck("sign");
  const nav = useNavigate();

  const { isOpened, setStatusChange } = useHeaderDropdownStatusStore();
  const logoSrc = "../../../assets/logo.png";
  return (
    <HeaderMain $signPageDetected={signPageDetection}>
      <HeaderInnerDiv>
        <a href="#" onClick={() => nav("/")}>
          <LogoImage src={logoSrc} alt="logo" $opened={isOpened} />
        </a>
        <div className="flex items-center">
          <MenuImage
            src="../../../assets/menu.png"
            $opened={isOpened}
            onClick={() => setStatusChange()}
          />
        </div>
      </HeaderInnerDiv>
    </HeaderMain>
  );
};

export default Header;
