import tw from "tailwind-styled-components";
import {
  FlexCol,
  FlexColScnDiv,
  FlexRow,
  FullSizeDiv,
} from "../../styles/commonDivStyles";

interface ITempEmailToggle {
  $status: boolean;
}

export const SignMain = tw(FlexColScnDiv)`
  gap-10
  px-[var(--signpage-padding)]
  justify-center
  items-center
`;

export const SignPageLogoDiv = tw(FlexRow)`
  justify-center
  items-center
  w-20
  h-20
  rounded-full
  bg-black
  overflow-hidden
  shadow-2xl
`;

export const SignPageLogoImg = tw.img`
  w-full
  h-full
  object-fit
  invert
`;

const SignContainer = tw(FlexCol)`
  justify-center
  items-center
  gap-8
  max-h-fit
  px-16
  py-12
  rounded-3xl
  shadow-2xl
  overflow-hidden
  whitespace-nowrap
  ease-in-out
  duration-700
`;

interface IPageStatus {
  $status: boolean;
}

export const LoginContainer = tw(SignContainer)<IPageStatus>`
  ${(p) => (p.$status ? "h-0 w-1/3 p-0" : "w-full h-full")}
`;

export const SignUpContainer = tw(SignContainer)<IPageStatus>`
  ${(p) => (p.$status ? "w-full h-full" : "w-1/3 h-0 p-0")}
`;

export const ForLoginOpacity = tw(FullSizeDiv)<IPageStatus>`

`;

export const ForSignUpOpacity = tw(FullSizeDiv)<IPageStatus>`

`;

export const InputContainer = tw(FlexCol)`
  w-full
  h-fit
  gap-5
  justify-center
  items-center
`;

export const EmailAlertContainer = tw(FlexCol)<ITempEmailToggle>`
  gap-3
  absolute
  ${(p) =>
    p.$status
      ? "w-[var(--signpage-alert-open-width)] h-full p-5 opacity-100"
      : "w-0 h-0 p-0 opacity-0"}
  max-h-fit
  top-0
  right-1/2
  translate-x-1/2
  rounded-xl
  shadow-lg
  z-999
  overflow-hidden
  whitespace-nowrap
  ease-in-out
  duration-500
`;

//buttons

export const SubmitButton = tw.button`
  w-full
  h-fit
  p-2
  bg-black
  text-white
  rounded-lg
`;

export const SocialLoginButton = tw.button`
  flex
  justify-center
  items-center
  gap-3
  p-2
  w-full
  h-fit
  outline-2
  outline-[#e6e6e6]
  rounded-lg
`;

//inputs
export const CommonInput = tw.input`
  w-full
  bg-[#e6e6e6]
  text-md
  p-3
  outline-0
  outline-transparent
  rounded-lg
  ease-in-out
  duration-300
  
  focus:outline-2
  focus:bg-transparent
  focus:outline-[#e6e6e6]
`;

//other
export const HorizontalLine = tw.div`
  h-0.5
  w-full
  bg-[#e6e6e6]
`;
