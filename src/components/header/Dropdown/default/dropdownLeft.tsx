import { HeroFont, SmallFont } from "../../../../styles/commomTextStyles";
import useGoTo from "../../../../utils/navigation";
import { HeaderButton, HeaderDropDownHero } from "../../headerStyles";

const DropdownLeftSide = () => {
  const goTo = useGoTo();
  return (
    <>
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
    </>
  );
};

export default DropdownLeftSide;
