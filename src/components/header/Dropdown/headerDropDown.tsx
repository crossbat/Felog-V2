import {
  HeaderDropDownLeft,
  HeaderDropDownMain,
  HeaderDropDownRight,
} from "../headerStyles";
import DropdownLeftSide from "./default/dropdownLeft";
import DropdownRightSide from "./default/dropdownRight";
import { locationCheck } from "../../../utils/locationCheck";
import UserDropdownLeft from "./user/userDropdownLeft";
import UserDropdownRight from "./user/userDropdownRight";

type TDropdownStatus = {
  isOpened: boolean;
};

const HeaderDropDown = ({ isOpened }: TDropdownStatus) => {
  const location = locationCheck("user");
  return (
    <HeaderDropDownMain $opened={isOpened}>
      <HeaderDropDownLeft>
        {location ? <UserDropdownLeft /> : <DropdownLeftSide />}
      </HeaderDropDownLeft>
      <HeaderDropDownRight>
        {location ? <UserDropdownRight /> : <DropdownRightSide />}
      </HeaderDropDownRight>
    </HeaderDropDownMain>
  );
};

export default HeaderDropDown;
