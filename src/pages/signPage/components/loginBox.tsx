import { useNavigate } from "react-router";
import { SmallFont } from "../../../styles/commomTextStyles";
import { SignInputSize } from "../../../styles/commonInputStyles";
import { SignButton, SocialLoginDiv } from "../signPageStyles";

const LoginBox = () => {
  const nav = useNavigate();
  return (
    <>
      <img
        src="../../../assets/logo.png"
        className="h-[100px] object-contain"
        onClick={() => nav("/")}
      />
      <SignInputSize placeholder="아이디" />
      <SignInputSize placeholder="비밀번호" type="password" />
      <SignButton>로그인</SignButton>
      <SmallFont>간편 로그인</SmallFont>
      <SocialLoginDiv>
        <img className="w-[60px]" src="../../../assets/googleLogo.png" />
        <img className="w-[60px]" src="../../../assets/kakaotalkLogo.png" />
      </SocialLoginDiv>
      <SmallFont>아직 계정이 없나요?</SmallFont>
    </>
  );
};

export default LoginBox;
