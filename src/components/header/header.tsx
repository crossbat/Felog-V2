import { NavLink } from "react-router";
import { MediumFont } from "../../styles/commomTextStyles";
import DefaultNav from "./defaultNav";
import { useState } from "react";
import UserNav from "./userNavi";

const Header = () => {
  const [userSwitch, setUserSwitch] = useState(false);
  const logoSrc = "../../../assets/logo.png";
  return (
    <>
      <div className="w-full h-[60px] flex justify-between mt-[30px]">
        <a href="#" onClick={() => setUserSwitch(!userSwitch)}>
          <img className="h-full" src={logoSrc} alt="logo" />
        </a>
        <div className="flex items-center justify-center w-150 bg-[#f5f5f5] px-[50px] rounded-[15px]">
          <ul className="w-full flex list-none justify-between text-2xl">
            {userSwitch ? <UserNav /> : <DefaultNav />}
          </ul>
        </div>
        {userSwitch ? (
          <div className="rounded-full h-full w-[60px] bg-amber-100" />
        ) : (
          <div className="flex items-center text-2xl">
            <NavLink to="/sign">
              <MediumFont>로그인</MediumFont>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
