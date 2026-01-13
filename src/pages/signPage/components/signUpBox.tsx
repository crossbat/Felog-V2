import { SmallFont } from "../../../styles/commomTextStyles";
import { SignInputSize } from "../../../styles/commonInputStyles";
import { SignButton } from "../signPageStyles";

const SignUpBox = () => {
  return (
    <>
      <img
        src="../../../assets/logo.png"
        className="h-[100px] object-contain"
      />
      <SignInputSize placeholder="아이디" />
      <SignInputSize placeholder="이메일" />
      <SignInputSize placeholder="비밀번호" type="password" />
      <SignInputSize placeholder="비밀번호 확인" type="password" />
      <SignButton>이메일 인증 요청</SignButton>
      <SmallFont>계정이 이미 있나요?</SmallFont>
    </>
  );
};

export default SignUpBox;
