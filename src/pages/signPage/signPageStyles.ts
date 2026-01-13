import tw from "tailwind-styled-components";
import { FlexGrowDiv, FlexRowScnDiv } from "../../styles/commonDivStyles";

export const FlexGrowCenter = tw(FlexGrowDiv)`
  jusitify-center
  items-center
`;

export const MainFlex = tw(FlexRowScnDiv)`
  p-[50px]
  gap-[30px]
`;

export const SignFlex = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-full
  gap-[30px]
`;

export const SignButton = tw.button`
  w-[450px]
  h-[50px]
  text-[18px]
  hover:bg-[#1B211A]
  hover:text-white
  bg-[#EEEDEB]
  rounded-xl
  text-black
  duration-300
  ease-in-out
`;

export const SocialLoginDiv = tw.div`
  flex
  flex-row
  justify-center
  gap-12
`;
