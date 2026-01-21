import { SmallFont } from "../../../styles/commomTextStyles";
import type { TVerificateToggle } from "../../../types/signPageTypes";
import {
  CommonInput,
  EmailAlertContainer,
  SubmitButton,
} from "../signPageStyles";

const EmailVerificateBox = ({ status, setStatusChange }: TVerificateToggle) => {
  return (
    <EmailAlertContainer $status={status}>
      <CommonInput placeholder="이메일 인증번호" />
      <SubmitButton onClick={() => setStatusChange()}>
        <SmallFont>인증번호 입력</SmallFont>
      </SubmitButton>
    </EmailAlertContainer>
  );
};

export default EmailVerificateBox;
