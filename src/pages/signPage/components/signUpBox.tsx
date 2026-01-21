import { ExtraSmallFont, SmallFont } from "../../../styles/commomTextStyles";
import type { TSignPageToggle } from "../../../types/signPageTypes";
import { CommonInput, InputContainer, SubmitButton } from "../signPageStyles";

const SignUpBox = ({
  setStatusChange,
  setPageStatusChange,
}: TSignPageToggle) => {
  return (
    <>
      <InputContainer>
        <CommonInput placeholder="이메일" />
        <CommonInput placeholder="아이디" />
        <CommonInput type="password" placeholder="비밀번호" />
        <CommonInput type="password" placeholder="비밀번호 확인" />
        <SubmitButton onClick={() => setStatusChange?.()}>
          <SmallFont>이메일 인증요청하기</SmallFont>
        </SubmitButton>
      </InputContainer>
      <ExtraSmallFont onClick={() => setPageStatusChange()}>
        이미 가입하셨나요?
      </ExtraSmallFont>
    </>
  );
};

export default SignUpBox;
