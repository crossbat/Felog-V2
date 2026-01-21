import { FcGoogle } from "react-icons/fc";
import { ExtraSmallFont, SmallFont } from "../../../styles/commomTextStyles";
import {
  CommonInput,
  HorizontalLine,
  InputContainer,
  SocialLoginButton,
  SubmitButton,
} from "../signPageStyles";
import type { TSignPageToggle } from "../../../types/signPageTypes";

const LoginBox = ({ setPageStatusChange }: TSignPageToggle) => {
  return (
    <>
      <InputContainer>
        <CommonInput placeholder="아이디" />
        <CommonInput placeholder="비밀번호" type="password" />
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <input type="checkbox" />
            <ExtraSmallFont>아이디 기억하기</ExtraSmallFont>
          </div>
          <div>
            <ExtraSmallFont>비밀번호 찾기</ExtraSmallFont>
          </div>
        </div>
        <SubmitButton>
          <SmallFont>로그인</SmallFont>
        </SubmitButton>
      </InputContainer>
      <div className="flex items-center h-fit w-full gap-4 bg-transparent">
        <HorizontalLine />
        <ExtraSmallFont>or</ExtraSmallFont>
        <HorizontalLine />
      </div>
      <SocialLoginButton>
        <FcGoogle className="w-auto h-full" />
        <SmallFont>Continue with google</SmallFont>
      </SocialLoginButton>
      <ExtraSmallFont onClick={() => setPageStatusChange()}>
        회원이 아니신가요?
      </ExtraSmallFont>
    </>
  );
};

export default LoginBox;
