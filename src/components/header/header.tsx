import {
  HeaderInnerDiv,
  HeaderMain,
  LogoImage,
  MenuImage,
} from "./headerStyles";
import { useHeaderDropdownStatusStore } from "../../stores/headerStores";
import { locationCheck } from "../../utils/locationCheck";
import useGoTo from "../../utils/navigation";

const Header = () => {
  const signPageDetection = locationCheck("sign");
  const goTo = useGoTo();

  const { isOpened, setStatusChange } = useHeaderDropdownStatusStore();
  const logoSrc = "../../../assets/logo.png";
  return (
    <HeaderMain $signPageDetected={signPageDetection}>
      <HeaderInnerDiv>
        <a href="#" onClick={() => goTo("home")}>
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
}

export default Header;
