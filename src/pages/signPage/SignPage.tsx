import { useNavigate } from "react-router";
import {
  useSignPageToggleStore,
  useTempToggleStore,
} from "../../stores/SignStores";
import EmailVerificateBox from "./components/emailVerificationBox";
import LoginBox from "./components/loginBox";
import SignUpBox from "./components/signUpBox";
import {
  LoginContainer,
  SignMain,
  SignPageLogoDiv,
  SignPageLogoImg,
  SignUpContainer,
} from "./signPageStyles";

const SignPage = () => {
  const { status, setStatusChange } = useTempToggleStore();
  const { pageStatus, setPageStatusChange } = useSignPageToggleStore();
  const nav = useNavigate();
  return (
    <>
      <EmailVerificateBox status={status} setStatusChange={setStatusChange} />
      <SignMain>
        <LoginContainer $status={pageStatus}>
          <LoginBox setPageStatusChange={setPageStatusChange} />
        </LoginContainer>
        <SignPageLogoDiv onClick={() => nav("/")}>
          <SignPageLogoImg src="../../../assets/signLogo.png" />
        </SignPageLogoDiv>
        <SignUpContainer $status={pageStatus}>
          <SignUpBox
            setPageStatusChange={setPageStatusChange}
            setStatusChange={setStatusChange}
          />
        </SignUpContainer>
      </SignMain>
    </>
  );
};

export default SignPage;
