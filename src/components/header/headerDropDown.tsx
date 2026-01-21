import { BsArrowRight } from "react-icons/bs";
import { HeroFont, SmallFont, TitleFont } from "../../styles/commomTextStyles";
import {
  HeaderButton,
  HeaderDropDownHero,
  HeaderDropDownLeft,
  HeaderDropDownMain,
  HeaderDropDownRight,
  MoveToDiaryImage,
  MoveToDiaryText,
} from "./headerStyles";
import { useNavigate } from "react-router";
import { useHeaderDropdownStatusStore } from "../../stores/headerStores";
import { useSignPageToggleStore } from "../../stores/SignStores";

type TDropdownStatus = {
  isOpened: boolean;
};

const HeaderDropDown = ({ isOpened }: TDropdownStatus) => {
  const { setPageLogin, setPageSignUp } = useSignPageToggleStore();
  const nav = useNavigate();

  const { reset } = useHeaderDropdownStatusStore();

  const goTo = (where: "sign" | "login" | "board") => {
    if (where == "sign" || where == "login") {
      where == "sign" ? setPageSignUp() : setPageLogin();
      nav("/sign");
    } else {
      nav("/user/board");
    }
    reset();
  };

  return (
    <HeaderDropDownMain $opened={isOpened}>
      <HeaderDropDownLeft>
        <HeaderDropDownHero>
          <HeroFont>Lorem Ipsum</HeroFont>
          <HeroFont>Is simply</HeroFont>
          <HeroFont>Dummy Text</HeroFont>
        </HeaderDropDownHero>
        <div className="flex gap-5">
          <HeaderButton
            type="button"
            onClick={() => goTo("sign")}
            className="bg-white rounded-full"
          >
            <SmallFont>Get Start</SmallFont>
          </HeaderButton>
          <HeaderButton
            type="button"
            onClick={() => goTo("login")}
            className="text-white"
          >
            <SmallFont>Sign up</SmallFont>
          </HeaderButton>
        </div>
      </HeaderDropDownLeft>
      <HeaderDropDownRight>
        <MoveToDiaryText>
          <BsArrowRight className="max-h-8 max-w-8 w-full h-full" />
          <TitleFont>To Diary</TitleFont>
        </MoveToDiaryText>
        <MoveToDiaryImage
          onClick={() => goTo("board")}
          src="../../../assets/MainPageImage.png"
        />
      </HeaderDropDownRight>
    </HeaderDropDownMain>
  );
};

export default HeaderDropDown;
