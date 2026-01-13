import { TitleFont } from "../../styles/commomTextStyles";
import LoginBox from "./components/loginBox";
import SignUpBox from "./components/signUpBox";
import { FlexGrowCenter, MainFlex, SignFlex } from "./signPageStyles";

const SignPage = () => {
  return (
    <MainFlex>
      <div className="absolute w-[50%] h-full z-10 top-0 start-0 p-[50px]">
        <div className="bg-black w-full h-full rounded-4xl p-[30px] flex bg-[url(../../../assets/signBannerImage.png)] bg-center bg-cover">
          <TitleFont className="text-white w-[60%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </TitleFont>
        </div>
      </div>
      <FlexGrowCenter>
        <SignFlex>
          <LoginBox />
        </SignFlex>
      </FlexGrowCenter>
      <FlexGrowCenter>
        <SignFlex>
          <SignUpBox />
        </SignFlex>
      </FlexGrowCenter>
    </MainFlex>
  );
};

export default SignPage;
